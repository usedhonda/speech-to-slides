// Google Apps Script Backend for スピーチtoスライド Addon
// Generates slides directly in Google Slides from speech text

// Configuration
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-preview:generateContent';

// アドオンバージョン情報
const ADDON_VERSION = '1.8.7';
const ADDON_BUILD_DATE = '2025-12-07';
const ADDON_DEPLOY_NUMBER = 54;
const ADDON_BUILD_TIMESTAMP = '20251207_220150'; // キャッシュバスター用

/**
 * アドオンのバージョン情報を取得
 * @returns {Object} バージョン情報
 */
function getAddonVersion() {
    return {
        version: ADDON_VERSION,
        buildDate: ADDON_BUILD_DATE,
        deployNumber: ADDON_DEPLOY_NUMBER,
        scriptId: ScriptApp.getScriptId()
    };
}
// ログ記録用WebアプリのURL（「自分として実行」設定でスプレッドシート書き込み権限を持つ）
const LOG_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbzt1JZsrkU521Zmw-PBCTmHxAE3pqqtSXYsY70NCqUOX-y8Er-e_BxVE7wGMqFtDvYwwQ/exec';

/**
 * IDトークン（JWT）からユーザーメールを取得
 * Session.getActiveUser()が空を返すアドオン環境でも確実に取得できる
 * @returns {string} ユーザーのメールアドレス（取得できない場合は空文字）
 */
function getUserEmailFromIdToken() {
    try {
        const idToken = ScriptApp.getIdentityToken();
        if (!idToken) {
            console.log('IDトークンが取得できませんでした');
            return '';
        }
        // JWTは "ヘッダー.ペイロード.署名" の形式
        const parts = idToken.split('.');
        if (parts.length !== 3) {
            console.log('Invalid ID Token format');
            return '';
        }
        // ペイロード部分（2番目）をBase64デコード
        const payload = Utilities.base64Decode(parts[1], Utilities.Charset.UTF_8);
        const jsonString = Utilities.newBlob(payload).getDataAsString();
        const json = JSON.parse(jsonString);
        console.log('Email from ID Token:', json.email);
        return json.email || '';
    } catch (e) {
        console.log('Error getting email from ID Token:', e.toString());
        return '';
    }
}

/**
 * UserInfo APIからユーザーメールを取得（最も確実な方法）
 * OAuthトークンを使用してGoogleのUserInfo APIに問い合わせる
 * @returns {string} ユーザーのメールアドレス（取得できない場合は空文字）
 */
function getUserEmailFromApi() {
    try {
        const token = ScriptApp.getOAuthToken();
        if (!token) {
            console.log('OAuthトークンが取得できませんでした');
            return '';
        }
        // ChatGPT推奨: OpenID Connect UserInfo エンドポイントを使用
        const url = 'https://openidconnect.googleapis.com/v1/userinfo';
        const response = UrlFetchApp.fetch(url, {
            method: 'get',
            headers: { 'Authorization': 'Bearer ' + token },
            muteHttpExceptions: true
        });
        if (response.getResponseCode() !== 200) {
            console.log('UserInfo API Error:', response.getContentText());
            return '';
        }
        const data = JSON.parse(response.getContentText());
        console.log('Email from UserInfo API:', data.email);
        return data.email || '';
    } catch (e) {
        console.log('Error getting email from API:', e.toString());
        return '';
    }
}

/**
 * ユーザーメールを取得（複数の方法を試行）
 * @returns {string} ユーザーのメールアドレス
 */
function getUserEmail() {
    // 1. まずIDトークン方式を試す（高速）
    let email = getUserEmailFromIdToken();
    if (email) return email;

    // 2. 次にUserInfo API方式を試す（確実）
    email = getUserEmailFromApi();
    if (email) return email;

    // 3. 最後にSession APIを試す（フォールバック）
    try {
        email = Session.getActiveUser().getEmail();
        if (email) return email;
        email = Session.getEffectiveUser().getEmail();
        if (email) return email;
    } catch (e) {
        console.log('Session API failed:', e.toString());
    }

    return '';
}

/**
 * ユーザーが許可ドメインかどうかをチェック
 * @returns {Object} { isAuthorized: boolean, email: string, domain: string }
 */
function checkUserAuthorization() {
    const email = getUserEmail();
    const domain = email ? email.split('@')[1] : '';
    const authorizedDomains = ['fout.jp', 'uuum.jp'];
    const isAuthorized = authorizedDomains.includes(domain);

    console.log('checkUserAuthorization:', { email, domain, isAuthorized });

    return {
        isAuthorized: isAuthorized,
        email: email,
        domain: domain
    };
}

/**
 * 制限テンプレートリスト（バイネーム：著作者名・作品名・スタジオ名）
 * オープンアクセスユーザーには非表示
 */
const RESTRICTED_TEMPLATES = [
    // ジャンプ系（8個）
    'toriyama', 'onepiece', 'jojo', 'bleach', 'kimetsu', 'chainsaw', 'naruto', 'hunterxhunter',
    // マガジン・サンデー系（8個）
    'shingeki', 'takahashi', 'tezuka',
    'hajime-no-ippo', 'gto', 'shonan-junai', 'baki', 'kindaichi',
    // 少女マンガ系（8個）
    'sailormoon', 'versailles', 'nana',
    'cardcaptor', 'fruits-basket', 'kimi-ni-todoke', 'utena', 'hanasakeru',
    // 青年マンガ系（3個）
    'goldenkamuy', 'akira', 'ghost-in-shell',
    // アニメスタジオ系（5個）
    'studio-ghibli', 'shinkai', 'evangelion', 'kyoani', 'trigger',
    // 海外アニメ系（10個）
    'disney-classic', 'pixar-3d', 'spiderverse', 'timburton', 'simpsons',
    'southpark', 'american-comics', 'cartoon-network', 'dreamworks', 'illumination'
];

/**
 * 制限テンプレートリストを取得（フロントエンド用）
 * @returns {Array} 制限テンプレートIDの配列
 */
function getRestrictedTemplates() {
    return RESTRICTED_TEMPLATES;
}

/**
 * Runs when the addon is installed or document is opened
 */
function onOpen(e) {
    SlidesApp.getUi()
        .createAddonMenu()
        .addItem('スピーチtoスライドを開く', 'showSidebar')
        .addToUi();
}

/**
 * Runs when the add-on is installed
 */
function onInstall(e) {
    onOpen(e);
}

/**
 * Homepage trigger for the addon card
 */
function onHomepage(e) {
    return createHomepageCard();
}

/**
 * Called when file scope is granted
 */
function onFileScopeGranted(e) {
    return createHomepageCard();
}

/**
 * Called when file scope is granted for Slides
 */
function onSlidesOpen(e) {
    return createHomepageCard();
}

/**
 * Creates the homepage card for the addon
 */
function createHomepageCard() {
    const card = CardService.newCardBuilder()
        .setHeader(CardService.newCardHeader().setTitle('スピーチtoスライド'))
        .addSection(
            CardService.newCardSection()
                .addWidget(
                    CardService.newTextParagraph()
                        .setText('スピーチ原稿からスライドを自動生成します。')
                )
                .addWidget(
                    CardService.newTextButton()
                        .setText('サイドバーを開く')
                        .setOnClickAction(
                            CardService.newAction().setFunctionName('showSidebar')
                        )
                )
        )
        .build();
    return card;
}

/**
 * Shows the sidebar UI
 * テンプレートを使用してキャッシュバスター用タイムスタンプを注入
 */
function showSidebar() {
    const template = HtmlService.createTemplateFromFile('SidebarV2');
    template.buildTimestamp = ADDON_BUILD_TIMESTAMP;
    template.addonVersion = ADDON_VERSION;
    template.deployNumber = ADDON_DEPLOY_NUMBER;
    const html = template.evaluate()
        .setTitle('スピーチtoスライド');
    SlidesApp.getUi().showSidebar(html);
}

/**
 * Validates an API key and checks available capabilities
 * @param {string} apiKey - The Gemini API key to validate
 * @returns {Object} Validation result with available capabilities
 */
function validateApiKey(apiKey) {
    if (!apiKey || apiKey.trim() === '') {
        return {
            valid: false,
            hasTextGeneration: false,
            hasImageGeneration: false,
            error: 'APIキーが入力されていません',
            errorCode: 'NO_API_KEY'
        };
    }

    apiKey = apiKey.trim();

    // Step 1: Check if API key is valid by listing models
    const modelsUrl = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

    try {
        const modelsResponse = UrlFetchApp.fetch(modelsUrl, { muteHttpExceptions: true });
        const modelsCode = modelsResponse.getResponseCode();

        if (modelsCode === 401) {
            return {
                valid: false,
                hasTextGeneration: false,
                hasImageGeneration: false,
                error: 'APIキーが無効です',
                errorCode: 'INVALID_KEY'
            };
        } else if (modelsCode === 403) {
            return {
                valid: false,
                hasTextGeneration: false,
                hasImageGeneration: false,
                error: 'APIキーに権限がありません',
                errorCode: 'PERMISSION_DENIED'
            };
        } else if (modelsCode !== 200) {
            return {
                valid: false,
                hasTextGeneration: false,
                hasImageGeneration: false,
                error: `APIエラー (HTTP ${modelsCode})`,
                errorCode: 'API_ERROR'
            };
        }

        // Step 2: Test if gemini-3-pro-preview is actually usable
        const testUrl = GEMINI_API_URL + '?key=' + apiKey;
        const testPayload = {
            contents: [{
                parts: [{
                    text: '1'
                }]
            }],
            generationConfig: {
                thinkingConfig: {
                    thinkingBudget: 0
                }
            }
        };

        const testResponse = UrlFetchApp.fetch(testUrl, {
            method: 'post',
            contentType: 'application/json',
            payload: JSON.stringify(testPayload),
            muteHttpExceptions: true
        });

        const testCode = testResponse.getResponseCode();
        const testText = testResponse.getContentText();

        if (testCode === 400) {
            if (testText.includes('Budget 0 is invalid') || testText.includes('thinking mode')) {
                return {
                    valid: true,
                    hasTextGeneration: true,
                    hasImageGeneration: 'unknown',
                    message: 'APIキー有効（プロンプト生成OK）'
                };
            }
        }

        if (testCode === 429) {
            if (testText.includes('limit: 0') || (testText.includes('quota') && testText.includes('gemini-3-pro'))) {
                return {
                    valid: false,
                    hasTextGeneration: false,
                    hasImageGeneration: false,
                    error: 'このAPIキーではgemini-3-proを利用できません。有料プラン（Cloud Billing有効）のAPIキーが必要です。',
                    errorCode: 'FREE_TIER_LIMIT'
                };
            } else {
                return {
                    valid: true,
                    hasTextGeneration: true,
                    hasImageGeneration: 'unknown',
                    message: 'APIキー有効（一時的なレート制限中）'
                };
            }
        }

        let errorMsg = `テスト失敗 (HTTP ${testCode})`;
        try {
            const errorResult = JSON.parse(testText);
            if (errorResult.error && errorResult.error.message) {
                errorMsg = errorResult.error.message;
            }
        } catch (e) {}

        return {
            valid: false,
            hasTextGeneration: false,
            hasImageGeneration: false,
            error: errorMsg,
            errorCode: 'TEST_FAILED'
        };
    } catch (e) {
        return {
            valid: false,
            hasTextGeneration: false,
            hasImageGeneration: false,
            error: `検証エラー: ${e.toString()}`,
            errorCode: 'EXCEPTION'
        };
    }
}

/**
 * Main function to generate prompts (shared with web app version)
 */
function generatePrompts(settings, speechText) {
    try {
        console.log('=== generatePrompts START ===');
        console.log('settings.designStyles:', JSON.stringify(settings.designStyles));

        const apiKey = settings.geminiApiKey ? settings.geminiApiKey.trim() : '';

        if (!apiKey) {
            return {
                success: false,
                error: 'Gemini APIキーが入力されていません。基本設定でAPIキーを入力してください。'
            };
        }

        // Step 1: Analyze speech and extract slide structure
        console.log('Step 1: Calling analyzeSpeechwithGemini...');
        const slideStructure = analyzeSpeechwithGemini(speechText, settings, apiKey);
        console.log('Step 1 DONE. slideStructure:', JSON.stringify(slideStructure).substring(0, 500));

        // Step 2: Generate prompts for each slide
        console.log('Step 2: Calling generatePromptsForSlides...');
        const prompts = generatePromptsForSlides(slideStructure, settings, apiKey);
        console.log('Step 2 DONE. prompts count:', prompts ? prompts.length : 'undefined');

        // Step 3: Format as markdown
        console.log('Step 3: Calling formatAsMarkdown...');
        const markdown = formatAsMarkdown(prompts, settings);

        // Step 4: Calculate statistics
        const stats = calculateStatistics(prompts);

        console.log('=== generatePrompts SUCCESS ===');
        return {
            success: true,
            markdown: markdown,
            slides: prompts,
            slideCount: slideStructure.length,
            statistics: stats
        };
    } catch (error) {
        console.error('=== generatePrompts ERROR ===');
        console.error('Error:', error.toString());
        return {
            success: false,
            error: error.toString()
        };
    }
}

/**
 * Calculate statistics from prompts
 */
function calculateStatistics(prompts) {
    const roleCounts = {};
    prompts.forEach(slide => {
        roleCounts[slide.role] = (roleCounts[slide.role] || 0) + 1;
    });

    return {
        total: prompts.length,
        byRole: roleCounts
    };
}

/**
 * Analyze speech text using Gemini API
 */
function analyzeSpeechwithGemini(speechText, settings, apiKey) {
    const messageAmount = settings.textSettings?.japaneseMessage?.amount || 'normal';
    let messageLengthInstruction = '簡潔なメッセージ（10-20文字程度）';

    if (messageAmount === 'low') {
        messageLengthInstruction = '短いキーワード（5-10文字程度）';
    } else if (messageAmount === 'high') {
        messageLengthInstruction = '詳細なメッセージ（20-40文字程度）';
    }

    const prompt = `
あなたはプレゼンテーションの構成を分析するエキスパートです。
以下のスピーチ原稿を分析し、適切なスライド構成を提案してください。

【原稿】
${speechText}

【スライド枚数】
${settings.slideCountMode === 'manual' ?
    `指定枚数: ${settings.slideCount}枚（この枚数に近づけてください）` :
    `自動判定: 原稿の内容・構造に基づいて適切な枚数を判断してください

■ 判断基準（文字数ではなく内容で判断）
- 主要トピック/セクションの数
- 説明が必要な概念・アイデアの数
- 具体例・事例の数
- 聴衆に伝えたいポイントの数

■ 目安
- 1つのスライド = 1つの明確なメッセージ/ポイント
- 導入・まとめ用のスライドも含める
- 複雑な概念は複数スライドに分割
- 具体例や事例は独立したスライドに

■ 推奨範囲
- 短いスピーチ（5分程度）: 5〜10枚
- 中程度（10-15分）: 10〜20枚
- 長いスピーチ（20分以上）: 20〜35枚

■ 重要：少なすぎるより多い方が良い
- 1スライドに情報を詰め込みすぎない
- 各ポイントを丁寧に視覚化する`}

【出力形式】
各スライドについて、以下のJSON配列で返してください：
[
  {
    "slideNumber": 1,
    "japaneseTitle": "日本語タイトル",
    "englishTitle": "English Title",
    "japaneseMessage": "${messageLengthInstruction}",
    "englishMessage": "English message translation",
    "visualDescription": "このスライドの背景画像として描写すべき具体的なシーン・オブジェクト・状況（スピーチ内容から抽出）",
    "visualDescriptionEn": "visualDescriptionの英訳"
  },
  ...
]

【重要な指示 - 言語ルール】
■ 基本原則：原稿に書かれている言語をそのまま使う（勝手に翻訳しない）

■ japaneseTitle
  - 原稿が日本語なら日本語で作成
  - 原稿が英語なら英語のままでOK
  - 原稿に英語の固有名詞・ブランド名がある場合、その部分は英語のまま

■ englishTitle
  - japaneseTitleに日本語が含まれる場合：英語に翻訳
  - japaneseTitleが完全に英語の場合：空文字列 "" を返す（重複を避ける）

■ japaneseMessage: 「${messageLengthInstruction}」で作成
  - 原稿が日本語なら日本語で作成
  - 原稿が英語なら英語のままでOK

■ englishMessage
  - japaneseMessageに日本語が含まれる場合：英語に翻訳
  - japaneseMessageが完全に英語の場合：空文字列 "" を返す（重複を避ける）

■ visualDescription: スピーチ原稿から抽出した具体的なビジュアル要素
  - 例：「自動運転車が都市の交差点を安全に通過する様子」
  - 抽象的な表現ではなく、画像として描画できる具体的なシーンを記述

■ visualDescriptionEn: visualDescriptionの英訳

■ 禁止事項
  - 日本語の原稿を勝手に英語タイトルにしない
  - 原稿にない英語を追加しない
  - 英語と英訳が同じ内容になる重複を作らない

【最重要：出力形式について】
- 必ずJSON配列のみを出力してください
- 説明文や前置きは一切不要です
- \`\`\`json や \`\`\` で囲まないでください
- [ で始まり ] で終わる純粋なJSONのみを返してください
- 例: [{"slideNumber": 1, "japaneseTitle": "...", ...}, {"slideNumber": 2, ...}]
`;

    const charCount = speechText.length;
    const expectedSlides = settings.slideCountMode === 'manual'
        ? parseInt(settings.slideCount) || 10
        : Math.min(35, Math.max(5, Math.ceil(charCount / 300)));
    const maxOutputTokens = Math.min(16384, Math.max(2048, 500 + expectedSlides * 400));

    // NOTE: slideSchema was removed - responseSchema causes inconsistent output with Gemini API
    // See CLAUDE.md: "responseSchemaとプロンプト内のJSON指示が競合する"
    // JSON format is now specified only in the prompt instructions above

    // NOTE: responseSchema was removed due to inconsistent behavior with Gemini API
    // See CLAUDE.md: "responseSchemaとプロンプト内のJSON指示が競合する"
    // Using responseMimeType: "application/json" + prompt instructions instead
    const payload = {
        contents: [{
            parts: [{
                text: prompt
            }]
        }],
        generationConfig: {
            maxOutputTokens: maxOutputTokens,
            responseMimeType: "application/json"
            // responseSchema removed - causes inconsistent output when combined with prompt JSON instructions
        }
    };

    console.log('=== API Request Payload ===');
    console.log('generationConfig:', JSON.stringify(payload.generationConfig));

    const options = {
        method: 'post',
        contentType: 'application/json',
        payload: JSON.stringify(payload),
        muteHttpExceptions: true
    };

    const response = UrlFetchApp.fetch(GEMINI_API_URL + '?key=' + apiKey, options);
    const responseCode = response.getResponseCode();
    const responseText = response.getContentText();

    if (responseCode !== 200) {
        // Build detailed error message for debugging
        let apiErrorMsg = '';
        let apiErrorCode = '';
        let apiErrorStatus = '';
        let apiErrorDetails = '';

        try {
            const errorResult = JSON.parse(responseText);
            if (errorResult.error) {
                apiErrorMsg = errorResult.error.message || '';
                apiErrorCode = errorResult.error.code || '';
                apiErrorStatus = errorResult.error.status || '';
                if (errorResult.error.details) {
                    apiErrorDetails = JSON.stringify(errorResult.error.details, null, 2);
                }
            }
        } catch (e) {
            apiErrorMsg = responseText.substring(0, 500);
        }

        // Build user-friendly error with debug info
        let errorOutput = `【Gemini APIエラー】\n`;
        errorOutput += `HTTP Status: ${responseCode}\n`;
        if (apiErrorCode) errorOutput += `Error Code: ${apiErrorCode}\n`;
        if (apiErrorStatus) errorOutput += `Status: ${apiErrorStatus}\n`;
        errorOutput += `\n【エラーメッセージ】\n${apiErrorMsg}\n`;

        if (apiErrorDetails) {
            errorOutput += `\n【詳細情報】\n${apiErrorDetails}\n`;
        }

        // Add specific guidance based on error code
        errorOutput += `\n【対処方法】\n`;
        if (responseCode === 401) {
            errorOutput += '・APIキーが無効です。正しいAPIキーを入力してください。\n';
            errorOutput += '・Google AI Studio (https://aistudio.google.com/app/apikey) でキーを確認してください。';
        } else if (responseCode === 403) {
            errorOutput += '・APIキーに権限がありません。\n';
            errorOutput += '・このモデルを使用する権限があるか確認してください。\n';
            errorOutput += '・有料プラン（Cloud Billing有効）が必要な場合があります。';
        } else if (responseCode === 429) {
            errorOutput += '・API利用制限（レートリミット）に達しました。\n';
            errorOutput += '・しばらく待ってから（1-2分後）再試行してください。\n';
            errorOutput += '・無料枠の場合、1分あたりのリクエスト数に制限があります。';
        } else if (responseCode === 400) {
            errorOutput += '・リクエストの形式に問題があります。\n';
            errorOutput += '・プロンプトの内容に問題がある可能性があります。\n';
            errorOutput += '・入力テキストが長すぎる場合は短くしてお試しください。';
        } else if (responseCode === 503) {
            errorOutput += '・モデルが過負荷状態または一時的に利用不可です。\n';
            errorOutput += '・しばらく待ってから再試行してください。';
        } else {
            errorOutput += '・予期しないエラーが発生しました。\n';
            errorOutput += '・APIキーとネットワーク接続を確認してください。';
        }

        throw new Error(errorOutput);
    }

    const result = JSON.parse(responseText);

    if (result.candidates && result.candidates[0].content) {
        const text = result.candidates[0].content.parts[0].text;

        // Detailed logging for debugging
        console.log('=== Gemini Response Debug ===');
        console.log('Raw text length:', text.length);
        console.log('First 200 chars (escaped):', JSON.stringify(text.substring(0, 200)));

        // Log first 10 character codes to detect BOM or invisible chars
        const charCodes = [];
        for (let i = 0; i < Math.min(10, text.length); i++) {
            charCodes.push(text.charCodeAt(i));
        }
        console.log('First 10 char codes:', JSON.stringify(charCodes));

        // Collect debug info for error reporting
        const debugInfo = { methods: [], errors: [] };
        const parsed = tryParseJsonArray(text, debugInfo);

        if (parsed && parsed.length > 0) {
            console.log('Parse SUCCESS: ' + parsed.length + ' slides');
            return parsed;
        }

        // Parsing failed - create detailed error message for user
        console.log('=== JSON Parse Debug Info ===');
        console.log(JSON.stringify(debugInfo, null, 2));

        // Build comprehensive error message for debugging
        let errorMsg = '【JSONパースエラー】\n';
        errorMsg += 'Gemini APIからの応答をJSONとしてパースできませんでした。\n\n';

        errorMsg += '【応答の概要】\n';
        errorMsg += `・文字数: ${debugInfo.originalLength}文字 (トリム後: ${debugInfo.trimmedLength})\n`;
        errorMsg += `・先頭文字: "${debugInfo.firstChar}" (文字コード: ${debugInfo.firstCharCode})\n`;

        // Check for common issues
        if (debugInfo.firstCharCode === 0xFEFF) {
            errorMsg += '  → ⚠️ BOM (Byte Order Mark) が検出されました\n';
        }
        if (debugInfo.firstChar !== '[' && debugInfo.firstChar !== '{') {
            errorMsg += `  → ⚠️ JSONは [ または { で始まるべきですが、"${debugInfo.firstChar}" で始まっています\n`;
        }

        errorMsg += `\n【先頭100文字】\n${debugInfo.first100}\n`;
        errorMsg += `\n【末尾100文字】\n${debugInfo.last100}\n`;

        if (debugInfo.errorPosition) {
            errorMsg += `\n【パースエラー位置】\n`;
            errorMsg += `・文字位置: ${debugInfo.errorPosition}\n`;
            errorMsg += `・周辺コンテキスト: ...${debugInfo.errorContext}...\n`;
        }

        errorMsg += '\n【試行したパース方法】\n';
        debugInfo.methods.forEach((m, i) => {
            errorMsg += `${i + 1}. ${m}\n`;
        });

        if (debugInfo.errors.length > 0) {
            errorMsg += '\n【各メソッドのエラー詳細】\n';
            debugInfo.errors.forEach(e => {
                errorMsg += `・${e.method}: ${e.error}\n`;
            });
        }

        if (debugInfo.afterSanitize) {
            errorMsg += `\n【サニタイズ後の先頭100文字】\n${debugInfo.afterSanitize}\n`;
        }

        errorMsg += '\n【対処方法】\n';
        errorMsg += '1. 再度実行してみてください（一時的な問題の可能性）\n';
        errorMsg += '2. 入力テキストが長すぎる場合は短くしてお試しください\n';
        errorMsg += '3. APIキーが有効で、クォータが残っているか確認してください\n';

        throw new Error(errorMsg);
    }

    // No candidates - check for other error info
    if (result.error) {
        let errorMsg = '【Gemini API応答エラー】\n';
        errorMsg += `メッセージ: ${result.error.message}\n`;
        if (result.error.code) errorMsg += `コード: ${result.error.code}\n`;
        if (result.error.status) errorMsg += `ステータス: ${result.error.status}\n`;
        throw new Error(errorMsg);
    }

    // No candidates found - detailed error
    let noCandidateMsg = '【応答エラー】\n';
    noCandidateMsg += 'Gemini APIからの応答に candidates が含まれていません。\n\n';
    noCandidateMsg += '【受信した応答の構造】\n';
    noCandidateMsg += `・トップレベルキー: ${Object.keys(result).join(', ')}\n`;
    if (result.promptFeedback) {
        noCandidateMsg += `・promptFeedback: ${JSON.stringify(result.promptFeedback)}\n`;
    }
    noCandidateMsg += '\n【考えられる原因】\n';
    noCandidateMsg += '1. プロンプトがセーフティフィルターでブロックされた可能性\n';
    noCandidateMsg += '2. 入力が長すぎてトークン制限を超えた可能性\n';
    noCandidateMsg += '3. APIの一時的な問題\n';
    noCandidateMsg += '\n【対処方法】\n';
    noCandidateMsg += '・スピーチ原稿の内容を確認してください\n';
    noCandidateMsg += '・原稿が長い場合は短くして再試行してください\n';
    throw new Error(noCandidateMsg);
}

/**
 * Try to parse JSON array from text using multiple methods
 * Handles both [...] array format and {...}{...} concatenated objects format
 * Enhanced with sanitization for Gemini API quirks
 * @param {string} text - Raw text to parse
 * @param {Object} debugInfo - Optional object to collect debug information
 * @returns {Array|null} Parsed array or null
 */
function tryParseJsonArray(text, debugInfo) {
    if (!text) return null;

    // Initialize debug info collector
    const debug = debugInfo || { methods: [], errors: [] };

    let trimmedText = text.trim();
    debug.originalLength = text.length;
    debug.trimmedLength = trimmedText.length;
    debug.firstChar = trimmedText[0];
    debug.firstCharCode = trimmedText.charCodeAt(0);
    debug.first100 = trimmedText.substring(0, 100);
    debug.last100 = trimmedText.substring(Math.max(0, trimmedText.length - 100));

    console.log('tryParseJsonArray: first char=' + trimmedText[0] + ' (code:' + trimmedText.charCodeAt(0) + '), len=' + trimmedText.length);

    // Pre-process: Fix common Gemini JSON issues
    trimmedText = sanitizeJsonText(trimmedText);
    debug.afterSanitize = trimmedText.substring(0, 100);

    // 1. If starts with [, try direct JSON array parse
    if (trimmedText.startsWith('[')) {
        debug.methods.push('1-direct-array');
        try {
            const parsed = JSON.parse(trimmedText);
            if (Array.isArray(parsed) && parsed.length > 0) {
                console.log('Method 1 (direct array) success: ' + parsed.length + ' items');
                debug.success = 'method1';
                return parsed;
            }
        } catch (e) {
            debug.errors.push({ method: 1, error: e.message });
            console.log('Method 1 failed: ' + e.message);

            // Log the position where parsing failed
            const match = e.message.match(/position (\d+)/);
            if (match) {
                const pos = parseInt(match[1]);
                debug.errorPosition = pos;
                debug.errorContext = trimmedText.substring(Math.max(0, pos - 30), pos + 30);
                console.log('Error at position ' + pos + ': around "' + debug.errorContext + '"');
            }

            // Try to fix and retry
            debug.methods.push('1b-fixed-array');
            const fixed = fixBrokenJson(trimmedText);
            if (fixed !== trimmedText) {
                debug.fixedDiff = fixed.length - trimmedText.length;
                try {
                    const parsed = JSON.parse(fixed);
                    if (Array.isArray(parsed) && parsed.length > 0) {
                        console.log('Method 1b (fixed array) success: ' + parsed.length + ' items');
                        debug.success = 'method1b';
                        return parsed;
                    }
                } catch (e2) {
                    debug.errors.push({ method: '1b', error: e2.message });
                    console.log('Method 1b failed: ' + e2.message);
                }
            }
        }
    }

    // 2. If starts with {, wrap in array brackets
    if (trimmedText.startsWith('{')) {
        debug.methods.push('2-wrap-objects');
        try {
            // Replace }\n{ or }{ with },{
            const arrayText = '[' + trimmedText.replace(/\}\s*\n\s*\{/g, '},{').replace(/\}\s*\{/g, '},{') + ']';
            const parsed = JSON.parse(arrayText);
            if (Array.isArray(parsed) && parsed.length > 0) {
                console.log('Method 2 (wrap objects) success: ' + parsed.length + ' items');
                debug.success = 'method2';
                return parsed;
            }
        } catch (e) {
            debug.errors.push({ method: 2, error: e.message });
            console.log('Method 2 failed: ' + e.message);
        }

        // 2b. Try parsing as single object
        debug.methods.push('2b-single-object');
        try {
            const parsed = JSON.parse(trimmedText);
            if (typeof parsed === 'object' && parsed !== null && parsed.slideNumber !== undefined) {
                console.log('Method 2b (single object) success');
                debug.success = 'method2b';
                return [parsed];
            }
        } catch (e) {
            debug.errors.push({ method: '2b', error: e.message });
            console.log('Method 2b failed: ' + e.message);
        }
    }

    // 3. Try to find JSON array in text (for cases with surrounding text)
    debug.methods.push('3-regex-array');
    const arrayMatch = trimmedText.match(/\[\s*\{[\s\S]*\}\s*\]/);
    if (arrayMatch) {
        debug.regexMatchLength = arrayMatch[0].length;
        try {
            const parsed = JSON.parse(arrayMatch[0]);
            if (Array.isArray(parsed)) {
                console.log('Method 3 (regex array) success: ' + parsed.length + ' items');
                debug.success = 'method3';
                return parsed;
            }
        } catch (e) {
            debug.errors.push({ method: 3, error: e.message });
            console.log('Method 3 failed: ' + e.message);
        }
    }

    // 4. Try to extract JSON from [ to ]
    debug.methods.push('4-bracket-extract');
    const startIdx = trimmedText.indexOf('[');
    const endIdx = trimmedText.lastIndexOf(']');
    debug.bracketIndices = { start: startIdx, end: endIdx };
    if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
        try {
            const extracted = trimmedText.substring(startIdx, endIdx + 1);
            const parsed = JSON.parse(extracted);
            if (Array.isArray(parsed)) {
                debug.success = 'method4';
                return parsed;
            }
        } catch (e) {
            debug.errors.push({ method: 4, error: e.message });
        }
    }

    // 5. Try extracting individual objects with regex
    debug.methods.push('5-extract-objects');
    try {
        const objects = [];
        const objRegex = /\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}/g;
        let match;
        while ((match = objRegex.exec(trimmedText)) !== null) {
            try {
                const obj = JSON.parse(match[0]);
                if (obj.slideNumber !== undefined) {
                    objects.push(obj);
                }
            } catch (e) {
                // Skip invalid object
            }
        }
        if (objects.length > 0) {
            console.log('Method 5 (extract objects) success: ' + objects.length + ' items');
            debug.success = 'method5';
            debug.extractedCount = objects.length;
            return objects;
        }
    } catch (e) {
        debug.errors.push({ method: 5, error: e.message });
        console.log('Method 5 failed: ' + e.message);
    }

    debug.success = null;
    return null;
}

/**
 * Sanitize JSON text to fix common Gemini output issues
 */
function sanitizeJsonText(text) {
    let result = text;

    // Remove BOM if present
    if (result.charCodeAt(0) === 0xFEFF) {
        result = result.substring(1);
    }

    // Fix control characters that break JSON (except valid whitespace)
    result = result.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');

    // Fix trailing commas before } or ]
    result = result.replace(/,\s*([\}\]])/g, '$1');

    // Fix unescaped newlines inside string values
    // This is a simplified approach - replace literal newlines in strings
    result = result.replace(/:\s*"([^"]*)"/g, function(match, content) {
        const fixed = content
            .replace(/\n/g, '\\n')
            .replace(/\r/g, '\\r')
            .replace(/\t/g, '\\t');
        return ': "' + fixed + '"';
    });

    return result;
}

/**
 * Try to fix broken JSON by finding and fixing common issues
 */
function fixBrokenJson(text) {
    let result = text;

    // Try to balance brackets
    let openBrackets = 0;
    let openBraces = 0;

    for (let i = 0; i < result.length; i++) {
        const char = result[i];
        if (char === '[') openBrackets++;
        if (char === ']') openBrackets--;
        if (char === '{') openBraces++;
        if (char === '}') openBraces--;
    }

    // Add missing closing brackets
    while (openBraces > 0) {
        result += '}';
        openBraces--;
    }
    while (openBrackets > 0) {
        result += ']';
        openBrackets--;
    }

    return result;
}

/**
 * Generate prompts for each slide based on structure
 */
function generatePromptsForSlides(slideStructure, settings, apiKey) {
    const designStyles = settings.designStyles && settings.designStyles.length > 0
        ? settings.designStyles
        : ['business-professional'];

    const allTemplates = designStyles.map(style =>
        getStyleTemplates(style, settings.customStyle)
    );

    const aspectRatio = settings.aspectRatio || '16:9';
    const aspectRatioMap = {
        '16:9': { format: '16:9 landscape presentation slide', orientation: 'landscape' },
        '4:3': { format: '4:3 standard presentation slide', orientation: 'landscape' },
        '1:1': { format: '1:1 square image', orientation: 'square' },
        '9:16': { format: '9:16 vertical/portrait image', orientation: 'portrait' },
        '21:9': { format: '21:9 ultra-wide cinematic format', orientation: 'landscape' },
        '3:4': { format: '3:4 vertical poster format', orientation: 'portrait' }
    };
    const aspectConfig = aspectRatioMap[aspectRatio] || aspectRatioMap['16:9'];

    const slides = slideStructure.map(slide => {
        const combinedTemplate = combineTemplates(allTemplates);
        const textSettings = settings.textSettings || {};

        // Build JSON structured prompt for image generation
        const promptObj = {
            meta: {
                instruction: "Think step-by-step about the composition, text placement, and lighting before generating.",
                format: aspectConfig.format,
                priority: "Topic visualization is mandatory - style is secondary",
                note: "DO NOT render any text on the image - text will be added separately"
            },
            subject: {
                topic: slide.japaneseTitle,
                topic_en: slide.englishTitle,
                key_message: slide.japaneseMessage || "",
                key_message_en: slide.englishMessage || "",
                visual_scene: slide.visualDescriptionEn || slide.visualDescription || "Visualize the topic directly",
                action: "The subject should be depicted in a dynamic or meaningful pose/state"
            },
            environment: {
                setting: "Contextually appropriate background that supports the topic",
                atmosphere: "Professional presentation quality with depth",
                details: "Include subtle environmental elements that reinforce the theme"
            },
            lighting: {
                type: "Cinematic lighting with clear subject illumination",
                mood: "Professional, engaging, and visually striking",
                technique: "Three-point lighting setup or dramatic rim lighting"
            },
            style: {
                artistic_treatment: combinedTemplate.basePrompt,
                font_style: combinedTemplate.fontStyle,
                message_style: combinedTemplate.messageStyle,
                note: "Style guides HOW to draw, topic guides WHAT to draw"
            },
            camera: {
                aspect_ratio: aspectRatio,
                orientation: aspectConfig.orientation,
                shot_type: "Medium to wide shot for presentation context",
                focus: "Sharp focus on main subject with subtle background separation",
                composition: "Rule of thirds with safe zones for text overlay"
            },
            text_overlay: {
                enabled: false,
                note: "Text will be added by Google Slides - do not render text in the image"
            },
            constraints: {
                text_safe_zone: "Keep top 20% and bottom 20% visually simple for text overlay",
                requirements: [
                    "Visual elements MUST represent the specific topic",
                    "DO NOT render any text in the image",
                    "Leave space for text overlay in top and bottom areas"
                ]
            },
            avoid: [
                "blur",
                "out of focus",
                "text",
                "letters",
                "words",
                "watermark",
                "low resolution"
            ]
        };

        const prompt = JSON.stringify(promptObj, null, 2);

        // Create English version
        const englishPromptObj = JSON.parse(JSON.stringify(promptObj));
        englishPromptObj.subject.topic = slide.englishTitle;
        englishPromptObj.subject.key_message = slide.englishMessage || "";
        const englishPrompt = JSON.stringify(englishPromptObj, null, 2);

        return {
            slideNumber: slide.slideNumber,
            japaneseTitle: slide.japaneseTitle,
            englishTitle: slide.englishTitle,
            message: slide.japaneseMessage,
            japaneseMessage: slide.japaneseMessage,
            englishMessage: slide.englishMessage,
            visualDescription: slide.visualDescription,
            visualDescriptionEn: slide.visualDescriptionEn,
            prompt: prompt,
            englishPrompt: englishPrompt
        };
    });

    return slides;
}

/**
 * Get position description
 */
function getPositionDescription(position) {
    const positions = {
        'top-center': 'at the top',
        'top-left': 'at the top-left',
        'top-right': 'at the top-right',
        'center': 'in the center',
        'bottom-center': 'at the bottom',
        'bottom-left': 'at the bottom-left',
        'bottom-right': 'at the bottom-right',
        'top-center-subtitle': 'below the main title'
    };
    return positions[position] || 'in the center';
}

/**
 * Translate prompts to English using Gemini API
 * Translates in batch to maintain context awareness
 * (Synced from web_app/Code.gs)
 */
function translatePromptsToEnglish(prompts, apiKey) {
    const translationPrompt = `You are a professional translator specializing in technical image generation prompts.
Translate the following image generation prompts from Japanese to English.

IMPORTANT RULES:
1. Preserve ALL technical instructions exactly (Think step-by-step, position descriptions, font specifications, etc.)
2. Translate ALL Japanese text to English, INCLUDING quoted text in "Display the Japanese text: ..." instructions
3. For quoted Japanese text, translate it to English and keep it quoted (e.g., "日本語タイトル" becomes "English Title")
4. Translate descriptive content naturally while maintaining technical accuracy
5. Maintain all numerical values, positions, and formatting instructions exactly
6. Do NOT add or remove any technical specifications
7. Output translations in the same order as input

Input prompts (separated by "---PROMPT---"):
${prompts.join('\n\n---PROMPT---\n\n')}

Output format: Return translations separated by "---TRANSLATION---" markers in the same order.`;

    // Calculate thinkingBudget based on prompts size
    const totalChars = prompts.join('').length;
    const thinkingBudget = Math.min(4096, Math.max(256, 256 + prompts.length * 128 + Math.floor(totalChars / 2000) * 64));

    const payload = {
        contents: [{
            parts: [{
                text: translationPrompt
            }]
        }],
        generationConfig: {
            temperature: 0.3,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 8192,
            thinkingConfig: {
                thinkingBudget: thinkingBudget
            }
        }
    };

    const options = {
        method: 'post',
        contentType: 'application/json',
        payload: JSON.stringify(payload),
        muteHttpExceptions: true
    };

    try {
        const response = UrlFetchApp.fetch(GEMINI_API_URL + '?key=' + apiKey, options);
        const responseCode = response.getResponseCode();
        const responseText = response.getContentText();

        if (responseCode !== 200) {
            console.log('Translation API error (HTTP ' + responseCode + '): ' + responseText.substring(0, 200));
            return prompts; // Use original prompts as fallback
        }

        const result = JSON.parse(responseText);

        if (result.candidates && result.candidates[0].content) {
            const text = result.candidates[0].content.parts[0].text;

            // Split by translation markers
            const translations = text.split(/---TRANSLATION---/i)
                .map(t => t.trim())
                .filter(t => t.length > 0);

            if (translations.length === prompts.length) {
                return translations;
            }

            console.log('Translation count mismatch. Expected: ' + prompts.length + ', Got: ' + translations.length);
            return prompts;
        }
    } catch (error) {
        console.log('Translation error: ' + error.toString());
        return prompts;
    }

    return prompts;
}

/**
 * Combine multiple style templates into one
 */
function combineTemplates(templateSets) {
    if (!templateSets || templateSets.length === 0) {
        return getStyleTemplates('business-professional', '');
    }

    if (templateSets.length === 1) {
        return templateSets[0];
    }

    const basePrompts = templateSets.map(t => t.basePrompt).join('\n\nAdditionally, incorporate elements from: ');
    const fontStyles = templateSets.map(t => t.fontStyle).join(' combined with ');
    const messageStyles = templateSets.map(t => t.messageStyle).join(' and ');
    const textReadability = templateSets[0].textReadability;

    return {
        basePrompt: basePrompts,
        fontStyle: fontStyles,
        messageStyle: messageStyles,
        textReadability: textReadability
    };
}

/**
 * Get style templates based on design style
 */
function getStyleTemplates(designStyle, customStyle) {
    const allTemplates = getAllPromptTemplates();

    if (designStyle === 'custom') {
        return customStyle ? parseCustomStyle(customStyle) : getDefaultCustomStyle();
    }

    return allTemplates[designStyle] || allTemplates['shonen-jump'];
}

/**
 * Parse custom style from user input
 */
function parseCustomStyle(customStyleText) {
    const basePrompt = `Create a complete, self-contained presentation slide artwork with the following style: ${customStyleText}

The image should be a finished visual composition that works as a standalone piece. Do not render any text.

Aspect ratio: 16:9 landscape orientation.`;

    return {
        basePrompt: basePrompt,
        fontStyle: 'professional font matching the custom style',
        messageStyle: 'impactful typography matching the custom style',
        textReadability: 'Ensure text is clearly legible with proper contrast.'
    };
}

/**
 * Get default custom style (fallback)
 */
function getDefaultCustomStyle() {
    return {
        basePrompt: 'Create a complete, professional presentation slide artwork with engaging visual composition. Do not render any text. Aspect ratio: 16:9 landscape orientation.',
        fontStyle: 'professional, modern font',
        messageStyle: 'clear, impactful typography',
        textReadability: 'Use clear, readable text with good contrast.'
    };
}

/**
 * Format prompts as markdown document
 */
function formatAsMarkdown(prompts, settings) {
    let markdown = '# スライド画像 制作ガイド\n\n';
    markdown += 'このガイドは、スライド画像を生成する際の手順書です。\n';
    markdown += '**各スライドのプロンプトをコピーして、Geminiに貼り付けて画像を生成してください。**\n\n';
    markdown += '---\n\n';

    prompts.forEach((slide) => {
        markdown += `## スライド ${slide.slideNumber}: ${slide.japaneseTitle}\n\n`;
        markdown += `- Japanese Title: ${slide.japaneseTitle}\n`;
        markdown += `- English Title: ${slide.englishTitle}\n`;
        markdown += `- Japanese Message: ${slide.japaneseMessage || slide.message}\n`;
        if (slide.englishMessage) {
            markdown += `- English Message: ${slide.englishMessage}\n`;
        }
        markdown += '\n**Prompt**:\n```\n';
        markdown += slide.prompt;
        markdown += '\n```\n\n';
    });

    markdown += '---\n';
    markdown += `Total Slides: ${prompts.length}\n`;

    return markdown;
}

// ============================================================
// Image Generation Functions (Nano Banana Pro / Gemini 3 Pro Image)
// ============================================================

const GEMINI_IMAGE_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent';

/**
 * Generate a 2K wallpaper image using Gemini 3 Pro Image (Nano Banana Pro)
 * @param {string} prompt - The image generation prompt
 * @param {number} slideNumber - Slide number for tracking
 * @param {string} apiKey - Gemini API key
 * @returns {Object} Result with imageData (base64) or error
 */
function generateSlideImage(prompt, slideNumber, apiKey) {
    console.log('=== generateSlideImage START ===');
    console.log('slideNumber:', slideNumber);
    console.log('prompt length:', prompt ? prompt.length : 0);

    if (!apiKey || apiKey.trim() === '') {
        return {
            success: false,
            error: 'APIキーが設定されていません',
            errorCode: 'NO_API_KEY'
        };
    }

    apiKey = apiKey.trim();

    // Prepare the payload for image generation
    // Nano Banana Pro uses responseModalities: ['image'] for image output
    const payload = {
        contents: [{
            parts: [{
                text: prompt
            }]
        }],
        generationConfig: {
            responseModalities: ['image'],
            // 2K resolution (1920x1080 or similar) - API will optimize
        },
        safetySettings: [
            { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
            { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
            { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
            { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' }
        ]
    };

    const options = {
        method: 'post',
        contentType: 'application/json',
        payload: JSON.stringify(payload),
        muteHttpExceptions: true
    };

    try {
        const response = UrlFetchApp.fetch(GEMINI_IMAGE_API_URL + '?key=' + apiKey, options);
        const responseCode = response.getResponseCode();
        const responseText = response.getContentText();

        console.log('Response code:', responseCode);

        if (responseCode !== 200) {
            let errorMessage = `API Error (HTTP ${responseCode})`;
            let errorCode = 'API_ERROR';

            try {
                const errorResult = JSON.parse(responseText);
                if (errorResult.error && errorResult.error.message) {
                    errorMessage = errorResult.error.message;
                }
            } catch (e) {}

            if (responseCode === 429) {
                errorCode = 'RATE_LIMIT';
                errorMessage = 'レート制限に達しました。しばらく待ってから再試行してください。';
            } else if (responseCode === 400) {
                errorCode = 'INVALID_PROMPT';
                errorMessage = 'プロンプトが無効です。内容を確認してください。';
            }

            return {
                success: false,
                error: errorMessage,
                errorCode: errorCode
            };
        }

        const result = JSON.parse(responseText);

        // Extract token usage from response
        let inputTokens = 0;
        let outputTokens = 0;
        if (result.usageMetadata) {
            inputTokens = result.usageMetadata.promptTokenCount || 0;
            outputTokens = result.usageMetadata.candidatesTokenCount || 0;
            console.log('Token usage - input:', inputTokens, 'output:', outputTokens);
        }

        // Extract base64 image from response
        if (result.candidates && result.candidates[0] && result.candidates[0].content) {
            const parts = result.candidates[0].content.parts;
            for (const part of parts) {
                if (part.inlineData && part.inlineData.data) {
                    console.log('=== generateSlideImage SUCCESS ===');
                    return {
                        success: true,
                        imageData: part.inlineData.data,
                        mimeType: part.inlineData.mimeType || 'image/png',
                        slideNumber: slideNumber,
                        promptLength: prompt ? prompt.length : 0,
                        inputTokens: inputTokens,
                        outputTokens: outputTokens,
                        message: '画像生成が完了しました'
                    };
                }
            }
        }

        return {
            success: false,
            error: '画像データが取得できませんでした',
            errorCode: 'NO_IMAGE_DATA'
        };

    } catch (e) {
        console.error('generateSlideImage EXCEPTION:', e.toString());
        return {
            success: false,
            error: `例外発生: ${e.toString()}`,
            errorCode: 'EXCEPTION'
        };
    }
}

/**
 * Get the index of the currently selected/active slide
 * @returns {number} 0-based slide index, or -1 if no slide is selected
 */
function getActiveSlideIndex() {
    try {
        const presentation = SlidesApp.getActivePresentation();
        const selection = presentation.getSelection();

        if (!selection) {
            console.log('No selection found');
            return -1;
        }

        const currentPage = selection.getCurrentPage();

        if (!currentPage) {
            console.log('No current page in selection');
            return -1;
        }

        // Get page type - we only want slides, not master/layout
        const pageType = currentPage.getPageType();
        if (pageType !== SlidesApp.PageType.SLIDE) {
            console.log('Current page is not a slide:', pageType);
            return -1;
        }

        // Find the index of this slide
        const slides = presentation.getSlides();
        const currentPageId = currentPage.getObjectId();

        for (let i = 0; i < slides.length; i++) {
            if (slides[i].getObjectId() === currentPageId) {
                console.log('Found active slide at index:', i);
                return i;
            }
        }

        console.log('Could not find slide in presentation');
        return -1;

    } catch (e) {
        console.error('getActiveSlideIndex error:', e.toString());
        return -1;
    }
}

/**
 * Set a slide's background to the generated image
 * @param {number} slideIndex - 0-based slide index
 * @param {string} imageBase64 - Base64 encoded image data
 * @param {string} mimeType - Image MIME type (default: image/png)
 * @returns {Object} Result with success status
 */
function setSlideBackground(slideIndex, imageBase64, mimeType) {
    console.log('=== setSlideBackground START ===');
    console.log('slideIndex:', slideIndex);
    console.log('imageBase64 length:', imageBase64 ? imageBase64.length : 0);

    try {
        const presentation = SlidesApp.getActivePresentation();
        const slides = presentation.getSlides();

        if (slideIndex < 0 || slideIndex >= slides.length) {
            return {
                success: false,
                error: `スライド ${slideIndex + 1} が見つかりません（全${slides.length}枚）`
            };
        }

        const slide = slides[slideIndex];

        // Convert base64 to blob
        const decoded = Utilities.base64Decode(imageBase64);
        const blob = Utilities.newBlob(decoded, mimeType || 'image/png', 'background.png');

        // Set as slide background
        slide.getBackground().setPictureFill(blob);

        console.log('=== setSlideBackground SUCCESS ===');
        return {
            success: true,
            message: `スライド ${slideIndex + 1} の背景を設定しました`
        };

    } catch (e) {
        console.error('setSlideBackground EXCEPTION:', e.toString());
        return {
            success: false,
            error: `背景設定エラー: ${e.toString()}`
        };
    }
}

/**
 * Combined function: Generate image and set as slide background
 * @param {string} prompt - The image generation prompt
 * @param {number} slideIndex - 0-based slide index
 * @param {string} apiKey - Gemini API key
 * @param {Object} slideData - Optional slide data for text overlays
 * @returns {Object} Result with success status and image data
 */
function generateAndSetBackground(prompt, slideIndex, apiKey, slideData) {
    console.log('=== generateAndSetBackground START ===');
    console.log('slideIndex:', slideIndex);
    console.log('slideData provided:', slideData ? 'yes' : 'no');

    // Step 1: Generate image
    const imageResult = generateSlideImage(prompt, slideIndex + 1, apiKey);

    if (!imageResult.success) {
        return imageResult;
    }

    // Step 2: Set as background
    const bgResult = setSlideBackground(slideIndex, imageResult.imageData, imageResult.mimeType);

    if (!bgResult.success) {
        // Return image data even if background setting failed
        return {
            success: false,
            error: bgResult.error,
            imageData: imageResult.imageData,
            mimeType: imageResult.mimeType
        };
    }

    // Step 3: Add text overlays if slideData is provided
    if (slideData) {
        try {
            const presentation = SlidesApp.getActivePresentation();
            const slide = presentation.getSlides()[slideIndex];
            const textResult = addSlideTextOverlays(slide, slideData);
            if (!textResult.success) {
                console.log('Text overlay warning:', textResult.error);
            }
        } catch (textError) {
            console.log('Text overlay error (image was set successfully):', textError);
        }
    }

    // Log the image generation
    try {
        const presentation = SlidesApp.getActivePresentation();
        const slideTitle = slideData?.japaneseTitle || presentation.getSlides()[slideIndex].getObjectId();
        logImageGeneration({
            title: slideTitle,
            slideNumber: slideIndex + 1,
            promptLength: imageResult.promptLength || 0,
            inputTokens: imageResult.inputTokens || 0,
            outputTokens: imageResult.outputTokens || 0,
            cost: '$0.13',
            success: true
        });
    } catch (logError) {
        console.log('ログ記録エラー（画像生成は成功）:', logError);
    }

    return {
        success: true,
        message: `スライド ${slideIndex + 1} の壁紙を生成し、背景に設定しました`,
        imageData: imageResult.imageData,
        mimeType: imageResult.mimeType
    };
}

/**
 * Generate image only (does NOT set as slide background)
 * Used for 2-step workflow: generate first, then apply to selected slide
 * @param {string} prompt - The image generation prompt
 * @param {number} slideNumber - Slide number for logging (1-based)
 * @param {string} apiKey - Gemini API key
 * @returns {Object} Result with success status and image data
 */
function generateImageOnly(prompt, slideNumber, apiKey) {
    console.log('=== generateImageOnly START ===');
    console.log('slideNumber:', slideNumber);

    // Generate image using existing function
    const imageResult = generateSlideImage(prompt, slideNumber, apiKey);

    if (!imageResult.success) {
        return imageResult;
    }

    // Log the image generation
    try {
        logImageGeneration({
            title: `Slide ${slideNumber}`,
            slideNumber: slideNumber,
            promptLength: imageResult.promptLength || 0,
            inputTokens: imageResult.inputTokens || 0,
            outputTokens: imageResult.outputTokens || 0,
            cost: '$0.13',
            success: true
        });
    } catch (logError) {
        console.log('ログ記録エラー（画像生成は成功）:', logError);
    }

    return {
        success: true,
        message: '画像を生成しました',
        imageData: imageResult.imageData,
        mimeType: imageResult.mimeType
    };
}

// ============================================================
// Text Overlay Functions (Outline Effect + Grouping)
// ============================================================

/**
 * Calculate dynamic font size based on text length
 * @param {string} text - The text to measure
 * @param {boolean} isTitle - Whether this is a title (larger) or message (smaller)
 * @returns {number} Font size in points
 */
function calculateFontSize(text, isTitle) {
    const len = text.length;
    if (isTitle) {
        if (len <= 8) return 44;
        if (len <= 15) return 36;
        if (len <= 25) return 28;
        return 22;
    } else {
        // Message text - smaller sizes
        if (len <= 15) return 28;
        if (len <= 30) return 24;
        if (len <= 50) return 20;
        return 16;
    }
}

/**
 * Add text with outline effect (double text box technique + grouping)
 * @param {Slide} slide - The slide to add text to
 * @param {Object} textConfig - Configuration for the text
 * @param {number} slideWidth - Width of the slide in points
 * @param {number} slideHeight - Height of the slide in points
 * @returns {Group|null} The grouped text elements or null if failed
 */
function addTextWithOutline(slide, textConfig, slideWidth, slideHeight) {
    const {
        japaneseText,
        englishText,
        isTitle,  // true = top position, false = bottom position
        japaneseColor = '#FFFFFF',
        englishColor = '#CCCCCC',
        outlineColor = '#000000',
        outlineOffset = 2
    } = textConfig;

    if (!japaneseText && !englishText) return null;

    const margin = 40;
    const boxWidth = slideWidth - (margin * 2);
    const boxHeight = 120;

    // Calculate Y position
    let yPosition;
    if (isTitle) {
        yPosition = 50;  // Top: 50pt from top
    } else {
        yPosition = slideHeight - 150;  // Bottom: 150pt from bottom
    }

    // Calculate font sizes
    const mainText = japaneseText || '';
    const subText = englishText || '';
    const japaneseSize = calculateFontSize(mainText, isTitle);
    const englishSize = Math.round(japaneseSize * 0.6);  // English is 60% of Japanese size

    // Combine Japanese and English text
    let fullText = mainText;
    if (subText && subText.trim() !== '') {
        fullText += '\n' + subText;
    }

    try {
        // Create outline layer (behind, larger, black)
        const outlineShape = slide.insertShape(
            SlidesApp.ShapeType.TEXT_BOX,
            margin + outlineOffset,
            yPosition + outlineOffset,
            boxWidth,
            boxHeight
        );
        outlineShape.getText().setText(fullText);

        // Style outline layer
        const outlineParagraphs = outlineShape.getText().getParagraphs();
        if (outlineParagraphs.length > 0) {
            outlineParagraphs[0].getRange().getTextStyle()
                .setFontSize(japaneseSize + 2)
                .setForegroundColor(outlineColor)
                .setBold(true)
                .setFontFamily('Noto Sans JP');
        }
        if (outlineParagraphs.length > 1 && subText) {
            outlineParagraphs[1].getRange().getTextStyle()
                .setFontSize(englishSize + 2)
                .setForegroundColor(outlineColor)
                .setBold(true)
                .setFontFamily('Arial');
        }
        outlineShape.getText().getParagraphStyle()
            .setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
        outlineShape.setContentAlignment(SlidesApp.ContentAlignment.TOP);

        // Create main text layer (in front, normal size, white)
        const mainShape = slide.insertShape(
            SlidesApp.ShapeType.TEXT_BOX,
            margin,
            yPosition,
            boxWidth,
            boxHeight
        );
        mainShape.getText().setText(fullText);

        // Style main layer
        const mainParagraphs = mainShape.getText().getParagraphs();
        if (mainParagraphs.length > 0) {
            mainParagraphs[0].getRange().getTextStyle()
                .setFontSize(japaneseSize)
                .setForegroundColor(japaneseColor)
                .setBold(true)
                .setFontFamily('Noto Sans JP');
        }
        if (mainParagraphs.length > 1 && subText) {
            mainParagraphs[1].getRange().getTextStyle()
                .setFontSize(englishSize)
                .setForegroundColor(englishColor)
                .setItalic(true)
                .setFontFamily('Arial');
        }
        mainShape.getText().getParagraphStyle()
            .setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
        mainShape.setContentAlignment(SlidesApp.ContentAlignment.TOP);

        // Group the two text boxes for easy selection
        const group = slide.group([outlineShape, mainShape]);
        return group;

    } catch (e) {
        console.error('addTextWithOutline error:', e.toString());
        return null;
    }
}

/**
 * Add all text overlays to a slide (title + message with outline effects)
 * @param {Slide} slide - The slide to add text to
 * @param {Object} slideData - The slide data containing titles and messages
 * @returns {Object} Result with success status
 */
function addSlideTextOverlays(slide, slideData) {
    console.log('=== addSlideTextOverlays START ===');
    console.log('slideData:', JSON.stringify(slideData));

    try {
        const presentation = SlidesApp.getActivePresentation();
        const slideWidth = presentation.getPageWidth();
        const slideHeight = presentation.getPageHeight();

        console.log('Slide dimensions:', slideWidth, 'x', slideHeight);

        // Add title (top position)
        if (slideData.japaneseTitle || slideData.englishTitle) {
            const titleGroup = addTextWithOutline(slide, {
                japaneseText: slideData.japaneseTitle,
                englishText: slideData.englishTitle,
                isTitle: true,
                japaneseColor: '#FFFFFF',
                englishColor: '#CCCCCC'
            }, slideWidth, slideHeight);

            if (titleGroup) {
                console.log('Title group created successfully');
            }
        }

        // Add message (bottom position)
        if (slideData.japaneseMessage || slideData.englishMessage) {
            const messageGroup = addTextWithOutline(slide, {
                japaneseText: slideData.japaneseMessage,
                englishText: slideData.englishMessage,
                isTitle: false,
                japaneseColor: '#FFFFFF',
                englishColor: '#CCCCCC'
            }, slideWidth, slideHeight);

            if (messageGroup) {
                console.log('Message group created successfully');
            }
        }

        console.log('=== addSlideTextOverlays SUCCESS ===');
        return { success: true };

    } catch (e) {
        console.error('addSlideTextOverlays error:', e.toString());
        return { success: false, error: e.toString() };
    }
}

/**
 * Log image generation via Web App proxy
 * Webアプリ経由でログを記録（権限問題を回避）
 * log_webappは「自分として実行」設定なので、オーナーの書き込み権限を使用
 * これにより、アドオン利用者にspreadsheets権限を要求せずにログ記録が可能
 * @param {Object} logData - Log data object
 * @param {string} logData.title - Title or identifier of the slide
 * @param {number} logData.slideNumber - Slide number
 * @param {number} logData.promptLength - Length of the prompt in characters
 * @param {number} logData.inputTokens - Input tokens used
 * @param {number} logData.outputTokens - Output tokens used
 * @param {string} logData.cost - Cost of generation (e.g., '$0.13')
 * @param {boolean} logData.success - Whether generation was successful
 */
function logImageGeneration(logData) {
    console.log('=== logImageGeneration START ===');
    console.log('logData:', JSON.stringify(logData));

    try {
        // ユーザー情報を取得（複数の方法を試行）
        const userEmail = getUserEmail();
        console.log('Final userEmail:', userEmail);

        // プレゼンテーションIDを取得
        let presentationId = '';
        try {
            presentationId = SlidesApp.getActivePresentation().getId();
        } catch (presError) {
            console.log('Could not get presentation ID:', presError.toString());
        }

        // log_webapp経由でログを記録（POSTリクエスト）
        const payload = {
            user: userEmail || '(不明)',
            title: logData.title || '(タイトルなし)',
            slideNumber: logData.slideNumber || '',
            promptLength: logData.promptLength || 0,
            inputTokens: logData.inputTokens || 0,
            outputTokens: logData.outputTokens || 0,
            cost: logData.cost || '$0.13',
            success: logData.success !== false,
            presentationId: presentationId
        };

        const options = {
            method: 'post',
            contentType: 'application/json',
            payload: JSON.stringify(payload),
            muteHttpExceptions: true
        };

        const response = UrlFetchApp.fetch(LOG_WEBAPP_URL, options);
        const responseCode = response.getResponseCode();
        const responseText = response.getContentText();

        if (responseCode === 200) {
            console.log('=== logImageGeneration SUCCESS ===');
            console.log('Response:', responseText);
        } else {
            console.log('=== logImageGeneration WARNING ===');
            console.log('Response code:', responseCode);
            console.log('Response:', responseText);
        }
    } catch (e) {
        // ログ記録の失敗はアドオン全体の動作に影響させない
        console.log('=== logImageGeneration ERROR ===');
        console.log('Error:', e.toString());
        console.log('Stack:', e.stack);
    }
}
