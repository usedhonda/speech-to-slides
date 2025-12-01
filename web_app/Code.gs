// Google Apps Script Backend for Slide Prompt Generator

// Configuration
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-preview:generateContent';

/**
 * Serves the HTML web app
 */
function doGet() {
    return HtmlService.createHtmlOutputFromFile('Index')
        .setTitle('スライドプロンプト生成ツール')
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
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

        // Step 2: Test if gemini-3-pro-preview is actually usable (not just listed)
        // Use thinkingBudget: 0 for fast validation (no token consumption)
        // - Free keys: 429 with "limit: 0" (quota exceeded)
        // - Paid keys: 400 with "Budget 0 is invalid" (model accessible but invalid param)
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
            // "Budget 0 is invalid" means the model is accessible - this is a paid key
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
            // Check if it's "limit: 0" (free tier can't use this model)
            if (testText.includes('limit: 0') || (testText.includes('quota') && testText.includes('gemini-3-pro'))) {
                return {
                    valid: false,
                    hasTextGeneration: false,
                    hasImageGeneration: false,
                    error: 'このAPIキーではgemini-3-proを利用できません。有料プラン（Cloud Billing有効）のAPIキーが必要です。',
                    errorCode: 'FREE_TIER_LIMIT'
                };
            } else {
                // Temporary rate limit - key is valid but hit quota
                return {
                    valid: true,
                    hasTextGeneration: true,
                    hasImageGeneration: 'unknown',
                    message: 'APIキー有効（一時的なレート制限中）'
                };
            }
        }

        // Other errors
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
 * Main function to generate prompts
 */
function generatePrompts(settings, speechText) {
    try {
        console.log('=== generatePrompts START ===');
        console.log('settings.designStyles:', JSON.stringify(settings.designStyles));

        // Get API key from settings (required)
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
        console.log('slideStructure.length:', slideStructure ? slideStructure.length : 'undefined');

        // Step 2: Generate prompts for each slide
        console.log('Step 2: Calling generatePromptsForSlides...');
        const prompts = generatePromptsForSlides(slideStructure, settings, apiKey);
        console.log('Step 2 DONE. prompts count:', prompts ? prompts.length : 'undefined');

        // Step 3: Format as markdown
        console.log('Step 3: Calling formatAsMarkdown...');
        const markdown = formatAsMarkdown(prompts, settings);
        console.log('Step 3 DONE.');

        // Step 4: Calculate statistics
        console.log('Step 4: Calling calculateStatistics...');
        const stats = calculateStatistics(prompts);
        console.log('Step 4 DONE.');

        console.log('=== generatePrompts SUCCESS ===');
        return {
            success: true,
            markdown: markdown,
            slides: prompts, // Return structured data
            slideCount: slideStructure.length,
            statistics: stats
        };
    } catch (error) {
        console.error('=== generatePrompts ERROR ===');
        console.error('Error:', error.toString());
        console.error('Stack:', error.stack);
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
    // Determine message length instruction based on amount setting
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
  - 例：原稿「FreakOutのAI戦略について」→「FreakOutのAI戦略」
  - 例：原稿「新しいロゴの発表」→「新しいロゴの発表」（勝手に英訳しない）
  - 例：原稿「About AI Strategy」→「AI Strategy」（英語のまま）

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
  - 例：「AIがレントゲン画像を分析し、異常箇所をハイライトしている医療シーン」
  - 抽象的な表現ではなく、画像として描画できる具体的なシーンを記述

■ visualDescriptionEn: visualDescriptionの英訳

■ 禁止事項
  - 日本語の原稿を勝手に英語タイトルにしない
  - 「英語の方がかっこいい」「英語の方が適切」という独自判断をしない
  - 原稿にない英語を追加しない
  - 英語と英訳が同じ内容になる重複を作らない（englishTitleは空にする）

【最重要：出力形式について】
- 必ずJSON配列のみを出力してください
- 説明文や前置きは一切不要です
- \`\`\`json や \`\`\` で囲まないでください
- [ で始まり ] で終わる純粋なJSONのみを返してください
- 例: [{"slideNumber": 1, "japaneseTitle": "...", ...}, {"slideNumber": 2, ...}]
`;

    // Calculate thinkingBudget based on input size and expected output
    // Base: 256 tokens, + 64 per 1000 chars, + 128 per expected slide
    const charCount = speechText.length;
    const expectedSlides = settings.slideCountMode === 'manual'
        ? parseInt(settings.slideCount) || 10
        : Math.min(35, Math.max(5, Math.ceil(charCount / 300)));  // More generous estimate for auto mode
    const thinkingBudget = Math.min(8192, Math.max(256, 256 + Math.floor(charCount / 1000) * 64 + expectedSlides * 128));

    // Calculate maxOutputTokens: ~400 tokens per slide (titles, messages, visual descriptions, JSON structure)
    // Base: 500 tokens for JSON structure overhead, + 400 per slide
    // Maximum: 16384 (Gemini 3 Pro limit)
    const maxOutputTokens = Math.min(16384, Math.max(2048, 500 + expectedSlides * 400));

    // NOTE: responseSchema was removed due to inconsistent behavior with Gemini 3 Pro Preview
    // See: https://github.com/google-gemini/deprecated-generative-ai-python/issues/541
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
        }
    };

    // Debug: Log the payload being sent
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

    // Check HTTP response code first
    if (responseCode !== 200) {
        let errorMessage = `Gemini API error (HTTP ${responseCode})`;
        try {
            const errorResult = JSON.parse(responseText);
            if (errorResult.error && errorResult.error.message) {
                errorMessage = errorResult.error.message;
            }
        } catch (e) {
            // Ignore JSON parse errors for error response
        }

        if (responseCode === 401) {
            throw new Error('APIキーが無効です。正しいAPIキーを入力してください。');
        } else if (responseCode === 403) {
            throw new Error('APIキーに権限がありません: ' + errorMessage);
        } else if (responseCode === 429) {
            throw new Error('API利用制限に達しました。しばらく待ってから再試行してください。');
        } else if (responseCode === 503) {
            throw new Error('モデルが過負荷状態です。しばらく待ってから再試行してください。（503: Model Overloaded）');
        } else {
            throw new Error('Gemini APIエラー: ' + errorMessage);
        }
    }

    const result = JSON.parse(responseText);

    if (result.candidates && result.candidates[0].content) {
        const text = result.candidates[0].content.parts[0].text;

        // Try to parse JSON - multiple methods
        const parsed = tryParseJsonArray(text);
        if (parsed && parsed.length > 0) {
            return parsed;
        }

        // Parsing failed - throw detailed error
        const payloadStr = JSON.stringify(payload.generationConfig);
        throw new Error(`Gemini応答のパースに失敗。trimmed[0]="${text.trim()[0]}" len=${text.length} | Payload: ${payloadStr.substring(0, 200)}`);
    }

    throw new Error('Gemini応答の形式が不正です。');
}

/**
 * Try to parse JSON array from text using multiple methods
 * Handles both [...] array format and {...}{...} concatenated objects format
 * Enhanced with sanitization for Gemini API quirks (synced from slides_addon)
 */
function tryParseJsonArray(text) {
    if (!text) return null;

    let trimmedText = text.trim();
    console.log('tryParseJsonArray: first char=' + trimmedText[0] + ', len=' + trimmedText.length);

    // Pre-process: Fix common Gemini JSON issues
    trimmedText = sanitizeJsonText(trimmedText);

    // 1. If starts with [, try direct JSON array parse
    if (trimmedText.startsWith('[')) {
        try {
            const parsed = JSON.parse(trimmedText);
            if (Array.isArray(parsed) && parsed.length > 0) {
                console.log('Method 1 (direct array) success: ' + parsed.length + ' items');
                return parsed;
            }
        } catch (e) {
            console.log('Method 1 failed: ' + e.message);
            // Log the position where parsing failed
            const match = e.message.match(/position (\d+)/);
            if (match) {
                const pos = parseInt(match[1]);
                console.log('Error at position ' + pos + ': around "' + trimmedText.substring(Math.max(0, pos - 20), pos + 20) + '"');
            }

            // Try to fix and retry
            const fixed = fixBrokenJson(trimmedText);
            if (fixed !== trimmedText) {
                try {
                    const parsed = JSON.parse(fixed);
                    if (Array.isArray(parsed) && parsed.length > 0) {
                        console.log('Method 1b (fixed array) success: ' + parsed.length + ' items');
                        return parsed;
                    }
                } catch (e2) {
                    console.log('Method 1b failed: ' + e2.message);
                }
            }
        }
    }

    // 2. If starts with {, wrap in array brackets
    if (trimmedText.startsWith('{')) {
        try {
            // Replace }\n{ or }{ with },{
            const arrayText = '[' + trimmedText.replace(/\}\s*\n\s*\{/g, '},{').replace(/\}\s*\{/g, '},{') + ']';
            const parsed = JSON.parse(arrayText);
            if (Array.isArray(parsed) && parsed.length > 0) {
                console.log('Method 2 (wrap objects) success: ' + parsed.length + ' items');
                return parsed;
            }
        } catch (e) {
            console.log('Method 2 failed: ' + e.message);
        }

        // 2b. Try parsing as single object
        try {
            const parsed = JSON.parse(trimmedText);
            if (typeof parsed === 'object' && parsed !== null && parsed.slideNumber !== undefined) {
                console.log('Method 2b (single object) success');
                return [parsed];
            }
        } catch (e) {
            console.log('Method 2b failed: ' + e.message);
        }
    }

    // 3. Try to find JSON array in text (for cases with surrounding text)
    const arrayMatch = trimmedText.match(/\[\s*\{[\s\S]*\}\s*\]/);
    if (arrayMatch) {
        try {
            const parsed = JSON.parse(arrayMatch[0]);
            if (Array.isArray(parsed)) {
                console.log('Method 3 (regex array) success: ' + parsed.length + ' items');
                return parsed;
            }
        } catch (e) {
            console.log('Method 3 failed: ' + e.message);
        }
    }

    // 4. Try to extract JSON from [ to ]
    const startIdx = trimmedText.indexOf('[');
    const endIdx = trimmedText.lastIndexOf(']');
    if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
        try {
            return JSON.parse(trimmedText.substring(startIdx, endIdx + 1));
        } catch (e) {
            // Continue
        }
    }

    // 5. Try extracting individual objects with regex
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
            return objects;
        }
    } catch (e) {
        console.log('Method 5 failed: ' + e.message);
    }

    return null;
}

/**
 * Sanitize JSON text to fix common Gemini output issues
 * (Synced from slides_addon/Code.gs)
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
 * (Synced from slides_addon/Code.gs)
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
 * Uses JSON structured prompting for better stability (per Gemini 3 Pro Image guide)
 */
function generatePromptsForSlides(slideStructure, settings, apiKey) {
    // Ensure designStyles has at least one value
    const designStyles = settings.designStyles && settings.designStyles.length > 0
        ? settings.designStyles
        : ['business-professional'];

    // Get templates for all selected styles
    const allTemplates = designStyles.map(style =>
        getStyleTemplates(style, settings.customStyle)
    );

    // Get aspect ratio settings
    const aspectRatio = settings.aspectRatio || '16:9';
    const aspectRatioMap = {
        '16:9': { format: '16:9 landscape presentation slide', orientation: 'landscape' },
        '4:3': { format: '4:3 standard presentation slide', orientation: 'landscape' },
        '1:1': { format: '1:1 square image', orientation: 'square' },
        '9:16': { format: '9:16 vertical/portrait image (mobile story format)', orientation: 'portrait' },
        '21:9': { format: '21:9 ultra-wide cinematic format', orientation: 'landscape' },
        '3:4': { format: '3:4 vertical poster format', orientation: 'portrait' }
    };
    const aspectConfig = aspectRatioMap[aspectRatio] || aspectRatioMap['16:9'];

    const slides = slideStructure.map(slide => {
        // Combine prompts from all selected styles
        const combinedTemplate = combineTemplates(allTemplates);
        const textSettings = settings.textSettings || {};

        // Build JSON structured prompt for stability (following Cinematic Call Sheet formula)
        const promptObj = {
            meta: {
                instruction: "Think step-by-step about the composition, text placement, and lighting before generating.",
                format: aspectConfig.format,
                priority: "Topic visualization is mandatory - style is secondary"
            },
            // 1. Subject: Who/What is it?
            subject: {
                topic: slide.japaneseTitle,
                topic_en: slide.englishTitle,
                key_message: slide.japaneseMessage || "",
                key_message_en: slide.englishMessage || "",
                visual_scene: slide.visualDescriptionEn || slide.visualDescription || "Visualize the topic directly",
                action: "The subject should be depicted in a dynamic or meaningful pose/state that reinforces the message"
            },
            // 2. Environment: Where are they?
            environment: {
                setting: "Contextually appropriate background that supports the topic",
                atmosphere: "Professional presentation quality with depth",
                details: "Include subtle environmental elements that reinforce the theme"
            },
            // 3. Lighting/Mood: How is it lit?
            lighting: {
                type: "Cinematic lighting with clear subject illumination",
                mood: "Professional, engaging, and visually striking",
                technique: "Three-point lighting setup or dramatic rim lighting as appropriate"
            },
            // 4. Style: Art style and rendering
            style: {
                artistic_treatment: combinedTemplate.basePrompt,
                font_style: combinedTemplate.fontStyle,
                message_style: combinedTemplate.messageStyle,
                note: "Style guides HOW to draw, topic guides WHAT to draw"
            },
            // 5. Camera: Technical specifications
            camera: {
                aspect_ratio: aspectRatio,
                orientation: aspectConfig.orientation,
                shot_type: "Medium to wide shot for presentation context",
                focus: "Sharp focus on main subject with subtle background separation",
                composition: "Rule of thirds with text safe zones preserved"
            },
            // Text overlay configuration
            text_overlay: {
                enabled: settings.showJapaneseTitle || settings.showEnglishTitle || settings.showJapaneseMessage || settings.showEnglishMessage,
                elements: []
            },
            // Constraints and requirements
            constraints: {
                text_margin: "5% on all sides",
                text_legibility: "high contrast against background",
                text_separation: "clear vertical spacing between elements",
                requirements: [
                    "Visual elements MUST represent the specific topic",
                    "DO NOT use generic/unrelated imagery",
                    "Main subject, setting, and mood must align with topic"
                ]
            },
            // Negative prompts - things to avoid
            avoid: [
                "blur",
                "out of focus",
                "distorted hands",
                "extra limbs",
                "extra fingers",
                "watermark",
                "grainy",
                "washed-out colors",
                "low resolution",
                "amateur composition",
                "cluttered background",
                "text errors",
                "misspelled words"
            ]
        };

        // Helper function to create enhanced spell-out instruction (per Gemini guide 3.2)
        const createSpellOut = (text, isJapanese = false) => {
            if (isJapanese) {
                // For Japanese, spell out each character
                const chars = text.split('');
                return `The characters are ${chars.join('-')}, each character clearly legible and distinct`;
            } else {
                // For English, spell out letters
                const letters = text.toUpperCase().split('');
                return `The letters are ${letters.join('-')}, clearly legible`;
            }
        };

        // Build text elements array
        if (promptObj.text_overlay.enabled) {
            if (settings.showJapaneseTitle && textSettings.japaneseTitle) {
                const jpSettings = textSettings.japaneseTitle;
                const titleObj = {
                    type: "headline",
                    text: slide.japaneseTitle,
                    position: getPositionDescription(jpSettings.position),
                    size: jpSettings.size,
                    color: jpSettings.color,
                    font: combinedTemplate.fontStyle
                };
                if (slide.japaneseTitle.length <= 8) {
                    titleObj.spelling_instruction = createSpellOut(slide.japaneseTitle, true);
                }
                promptObj.text_overlay.elements.push(titleObj);
            }

            if (settings.showEnglishTitle && textSettings.englishTitle) {
                const enSettings = textSettings.englishTitle;
                const subTitleObj = {
                    type: "sub-heading",
                    text: slide.englishTitle,
                    position: "directly below headline",
                    size: enSettings.size,
                    color: enSettings.color,
                    font: "sans-serif"
                };
                if (slide.englishTitle.length <= 12) {
                    subTitleObj.spelling_instruction = createSpellOut(slide.englishTitle, false);
                }
                promptObj.text_overlay.elements.push(subTitleObj);
            }

            if (settings.showJapaneseMessage && textSettings.japaneseMessage && slide.japaneseMessage) {
                const msgSettings = textSettings.japaneseMessage;
                const msgObj = {
                    type: "message",
                    text: slide.japaneseMessage,
                    position: getPositionDescription(msgSettings.position),
                    size: msgSettings.size,
                    color: msgSettings.color,
                    font: combinedTemplate.messageStyle
                };
                if (slide.japaneseMessage.length <= 15) {
                    msgObj.spelling_instruction = createSpellOut(slide.japaneseMessage, true);
                }
                promptObj.text_overlay.elements.push(msgObj);
            }

            if (settings.showEnglishMessage && textSettings.englishMessage && slide.englishMessage) {
                const enMsgSettings = textSettings.englishMessage;
                const enMsgObj = {
                    type: "english_message",
                    text: slide.englishMessage,
                    position: getPositionDescription(enMsgSettings.position),
                    size: enMsgSettings.size,
                    color: enMsgSettings.color,
                    font: "sans-serif"
                };
                if (slide.englishMessage.length <= 25) {
                    enMsgObj.spelling_instruction = createSpellOut(slide.englishMessage, false);
                }
                promptObj.text_overlay.elements.push(enMsgObj);
            }

            // Add effects if any
            if (textSettings.effects) {
                promptObj.text_overlay.effects = {
                    drop_shadow: textSettings.effects.dropShadow || false,
                    glow: textSettings.effects.glow || false
                };
            }
        }

        // Convert to JSON string as the prompt
        const prompt = JSON.stringify(promptObj, null, 2);

        // Create English version by replacing Japanese values with English equivalents
        const englishPromptObj = JSON.parse(JSON.stringify(promptObj)); // Deep copy
        englishPromptObj.subject.topic = slide.englishTitle;
        englishPromptObj.subject.key_message = slide.englishMessage || "";

        // Replace Japanese text in text_overlay elements with English
        if (englishPromptObj.text_overlay.elements) {
            englishPromptObj.text_overlay.elements = englishPromptObj.text_overlay.elements.map(el => {
                if (el.type === "headline") {
                    el.text = slide.englishTitle;
                    if (el.spell_out) {
                        el.spell_out = slide.englishTitle.split('').join('-');
                    }
                } else if (el.type === "message" && slide.englishMessage) {
                    el.text = slide.englishMessage;
                    if (el.spell_out) {
                        el.spell_out = slide.englishMessage.split('').join('-');
                    }
                }
                return el;
            });
        }

        const englishPrompt = JSON.stringify(englishPromptObj, null, 2);

        return {
            slideNumber: slide.slideNumber,
            japaneseTitle: slide.japaneseTitle,
            englishTitle: slide.englishTitle,
            message: slide.japaneseMessage, // Keep for backward compatibility
            japaneseMessage: slide.japaneseMessage,
            englishMessage: slide.englishMessage,
            prompt: prompt,
            englishPrompt: englishPrompt
        };
    });

    return slides;
}

/**
 * Translate prompts to English using Gemini API
 * Translates in batch to maintain context awareness
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
    // Base: 256 tokens, + 128 per prompt
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

        // Check HTTP response code
        if (responseCode !== 200) {
            Logger.log('Translation API error (HTTP ' + responseCode + '): ' + responseText.substring(0, 200));
            return prompts; // Use original prompts as fallback
        }

        const result = JSON.parse(responseText);

        if (result.candidates && result.candidates[0].content) {
            const text = result.candidates[0].content.parts[0].text;

            // Split by translation markers
            const translations = text.split(/---TRANSLATION---/i)
                .map(t => t.trim())
                .filter(t => t.length > 0);

            // If we got the expected number of translations, return them
            if (translations.length === prompts.length) {
                return translations;
            }

            // Fallback: if marker splitting failed, try to return original prompts
            Logger.log('Translation count mismatch. Expected: ' + prompts.length + ', Got: ' + translations.length);
            return prompts; // Use original prompts as fallback
        }
    } catch (error) {
        Logger.log('Translation error: ' + error.toString());
        return prompts; // Use original prompts as fallback
    }

    return prompts; // Use original prompts as fallback
}

/**
 * Get position description for Nano Banana Pro
 */
function getPositionDescription(position) {
    // Simplified position descriptions for better Nano Banana Pro compliance
    // Based on cheat sheet recommendations: use simple position words
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
 * Generate effects description
 */
function generateEffectsDescription(effects) {
    let desc = [];

    if (effects.dropShadow) {
        desc.push('Apply drop shadow: 3px offset, 5px blur, 60% opacity, black color');
    }

    if (effects.glow) {
        desc.push('Apply outer glow: 5px radius, 40% opacity, matching color theme');
    }

    return desc.length > 0 ? 'Effects: ' + desc.join('. ') + '.\n' : '';
}

/**
 * Combine multiple style templates into one
 */
function combineTemplates(templateSets) {
    // Handle empty array - return default template
    if (!templateSets || templateSets.length === 0) {
        return getStyleTemplates('business-professional', '');
    }

    if (templateSets.length === 1) {
        return templateSets[0];
    }

    // Combine base prompts from all styles
    const basePrompts = templateSets.map(t => t.basePrompt).join('\n\nAdditionally, incorporate elements from: ');
    const fontStyles = templateSets.map(t => t.fontStyle).join(' combined with ');
    const messageStyles = templateSets.map(t => t.messageStyle).join(' and ');
    const textReadability = templateSets[0].textReadability; // Use first template's readability

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
    // Get all templates from external file
    const allTemplates = getAllPromptTemplates();

    // Handle custom style
    if (designStyle === 'custom') {
        return customStyle ? parseCustomStyle(customStyle) : getDefaultCustomStyle();
    }

    // Return requested template or fall back to shonen-jump
    return allTemplates[designStyle] || allTemplates['shonen-jump'];
}

/**
 * Parse custom style from user input
 */
function parseCustomStyle(customStyleText) {
    const basePrompt = `Create a complete, self-contained presentation slide artwork with the following style: ${customStyleText}

The image should be a finished visual composition that works as a standalone piece. Include characters, objects, or scenes that embody the style. Do not create empty backgrounds - create complete, narrative-driven imagery.

Aspect ratio: 16:9 landscape orientation.`;

    return {
        basePrompt: basePrompt,
        fontStyle: 'professional font matching the custom style',
        messageStyle: 'impactful typography matching the custom style',
        textReadability: 'Ensure text is clearly legible with proper contrast and effects.'
    };
}

/**
 * Get default custom style (fallback)
 */
function getDefaultCustomStyle() {
    return {
        basePrompt: 'Create a complete, professional presentation slide artwork with engaging visual composition. Include meaningful imagery, characters, or scenes that tell a story. The image should be self-contained and impactful. Aspect ratio: 16:9 landscape orientation.',
        fontStyle: 'professional, modern font',
        messageStyle: 'clear, impactful typography',
        textReadability: 'Use clear, readable text with good contrast and appropriate effects.'
    };
}

/**
 * Format prompts as markdown document
 */
function formatAsMarkdown(prompts, settings) {
    let markdown = '# スライド画像 制作ガイド (Production Guide)\n\n';
    markdown += 'このガイドは、実際にスライド画像を1枚ずつ生成する際の手順書です。\n';
    markdown += '**各スライドのプロンプトは完成形**なので、そのままコピー＆ペーストして画像生成AIで生成できます。\n\n';
    markdown += '---\n\n';

    prompts.forEach((slide, index) => {
        markdown += `## スライド ${slide.slideNumber}: ${slide.japaneseTitle}\n\n`;
        markdown += `- Japanese Title: ${slide.japaneseTitle}\n`;
        if (slide.japaneseTitleEn) {
            markdown += `- Japanese Title (EN): ${slide.japaneseTitleEn}\n`;
        }
        markdown += `- English Title: ${slide.englishTitle}\n`;
        markdown += `- Japanese Message: ${slide.japaneseMessage || slide.message}\n`;
        if (slide.englishMessage) {
            markdown += `- English Message: ${slide.englishMessage}\n`;
        }
        markdown += '\n**Prompt**:\n```\n';
        markdown += slide.prompt;
        markdown += '\n```\n\n';
    });

    // Footer with stats
    markdown += '---\n';
    markdown += `Total Slides: ${settings.slideCount || prompts.length}\n`;

    markdown += '## 使い方\n';
    markdown += '1. 作りたいスライド番号のセクションを開く\n';
    markdown += '2. 「完成プロンプト」をそのままコピーする\n';
    markdown += '3. 画像生成AI（Nano Banana Pro など）に貼り付けて生成する\n';
    markdown += '4. アスペクト比を 16:9 に設定する\n';

    if (settings.showJapaneseTitle || settings.showEnglishTitle || settings.showJapaneseMessage || settings.showEnglishMessage) {
        markdown += '5. 生成完了！ タイトルとメッセージが含まれた完成スライドが出力されます\n\n';
        markdown += '**注意**: AI生成の日本語テキストに誤字がないか確認してください。必要に応じてPowerPointで修正可能です。\n';
    } else {
        markdown += '5. 生成された背景画像に、PowerPointでタイトルとメッセージを追加してください\n';
    }

    return markdown;
}

/**
 * Generate image using Gemini Image Generation API (Imagen 3.0)
 * @param {string} prompt - The prompt text for image generation
 * @param {number} slideNumber - The slide number for tracking
 * @param {string} apiKey - The Gemini API key (required)
 * @returns {Object} Result object with success status and image data or error
 */
function generateImage(prompt, slideNumber, apiKey) {
    try {
        // Validate API key
        if (!apiKey || apiKey.trim() === '') {
            return {
                success: false,
                error: 'Gemini APIキーが入力されていません。基本設定でAPIキーを入力してください。',
                errorCode: 'NO_API_KEY'
            };
        }

        apiKey = apiKey.trim();
        // Gemini 3 Pro Image (Nano Banana Pro) API endpoint
        const imageApiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent';

        // Request payload
        const payload = {
            contents: [{
                parts: [{
                    text: prompt
                }]
            }],
            generationConfig: {
                responseModalities: ['image'],
                numberOfImages: 1,
                aspectRatio: '16:9',
                safetySettings: [{
                    category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
                    threshold: 'BLOCK_NONE'
                }]
            }
        };

        // HTTP request options
        const options = {
            method: 'post',
            contentType: 'application/json',
            payload: JSON.stringify(payload),
            muteHttpExceptions: true
        };

        // Call Gemini 3 Pro Image API
        const response = UrlFetchApp.fetch(imageApiUrl + '?key=' + apiKey, options);
        const responseCode = response.getResponseCode();
        const responseText = response.getContentText();

        // Handle response
        if (responseCode === 200) {
            const result = JSON.parse(responseText);

            // Extract image data from Gemini API response
            if (result.candidates && result.candidates.length > 0) {
                const parts = result.candidates[0].content.parts;

                // Find the image part
                for (const part of parts) {
                    if (part.inlineData && part.inlineData.data) {
                        return {
                            success: true,
                            imageData: part.inlineData.data,
                            slideNumber: slideNumber,
                            message: '画像生成が完了しました'
                        };
                    }
                }

                throw new Error('画像データが返されませんでした');
            } else {
                throw new Error('画像データが返されませんでした');
            }
        } else if (responseCode === 429) {
            return {
                success: false,
                error: 'API利用制限に達しました。しばらく待ってから再試行してください。',
                errorCode: 'RATE_LIMIT'
            };
        } else if (responseCode === 400) {
            const errorResult = JSON.parse(responseText);
            return {
                success: false,
                error: '無効なプロンプトです: ' + (errorResult.error?.message || '不明なエラー'),
                errorCode: 'INVALID_PROMPT'
            };
        } else if (responseCode === 403) {
            return {
                success: false,
                error: '画像生成にはCloud Billingが有効なAPIキーが必要です。AI Studioの無料キーでは利用できません。',
                errorCode: 'BILLING_REQUIRED'
            };
        } else if (responseCode === 401) {
            return {
                success: false,
                error: 'APIキーが無効です。正しいAPIキーを入力してください。',
                errorCode: 'INVALID_KEY'
            };
        } else {
            return {
                success: false,
                error: 'API呼び出しエラー (HTTP ' + responseCode + '): ' + responseText,
                errorCode: 'API_ERROR'
            };
        }

    } catch (error) {
        Logger.log('Image generation error: ' + error.toString());
        return {
            success: false,
            error: '画像生成中にエラーが発生しました: ' + error.toString(),
            errorCode: 'EXCEPTION'
        };
    }
}
