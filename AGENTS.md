# GAS スライドプロンプト生成＆画像生成ツール - プロジェクト仕様書

## プロジェクト概要

Google Apps Script（GAS）で構築されたウェブアプリケーション。スピーチ原稿を分析し、画像生成AI用のプロンプトを自動生成。さらに、Gemini 3 Pro Image (Nano Banana Pro) APIを使って直接画像を生成できる統合ツール。

**技術スタック**:
- **バックエンド**: Google Apps Script (V8 Runtime)
- **フロントエンド**: HTML/CSS/JavaScript (Vanilla JS)
- **AI API**:
  - Gemini 3 Pro Preview (`gemini-3-pro-preview`) - プロンプト生成・翻訳
  - Gemini 3 Pro Image (`gemini-3-pro-image-preview`) - 画像生成 (Nano Banana Pro)
- **ストレージ**: LocalStorage (ブラウザー内設定保存)

**想定利用シーン**:
- スピーチ原稿からスライド構成を自動分析
- 各スライドの画像生成プロンプトを作成
- プロンプトを直接編集して微調整
- その場で画像を生成（約20円/枚）
- サムネイル確認→拡大→ダウンロード

## 主要機能

### 1. スピーチ原稿の自動分析
- Gemini 3 Pro APIでスピーチ原稿を解析
- スライド構成を自動提案（枚数、日本語タイトル、英語タイトル、メッセージ）
- JSON形式で構造化データを返却
- **メッセージ分量設定**: 少ない/普通/多い の3段階で調整可能

### 2. プロンプト自動生成
- **スライドトピックの統合**: タイトルとメッセージをプロンプトに明示的に含める
- **CRITICAL INSTRUCTION**: トピックを最優先として画像内容を決定
- **詳細なビジュアル仕様**: カメラ、ライティング、カラーコード、アスペクト比
- **テキストレンダリング仕様**: 位置、配置、サイズ、色、エフェクト
- **自動英訳**: プロンプト生成後に自動的に英語翻訳（文脈を考慮）

### 3. プロンプト直接編集
- **テキストエリアで編集可能**: 生成されたプロンプトをその場で修正
- **自動リサイズ**: 内容に応じて高さが調整（300px-600px）
- **自動保存**: blur時に自動保存、保存インジケーター表示
- **Markdown更新**: 編集後のプロンプトを反映

### 4. AI画像生成（Gemini 3 Pro Image / Nano Banana Pro）
- **Gemini 3 Pro Image API統合**: 約20円/枚
- **画像サイズ**: 16:9 アスペクト比
- **Safety Filter**: block_none（プレゼンテーション用途想定）
- **英語プロンプト使用**: 翻訳されたプロンプトで生成
- **2段階ワークフロー（v1.5.0〜）**:
  1. 「🎨 壁紙生成 [$0.13]」ボタンクリック → 画像生成のみ
  2. ローディングスピナー表示
  3. サムネイル表示（この時点では背景未設定）
  4. 「💾 保存」「📋 貼り付け」ボタン表示
  5. 「📋 貼り付け」クリック → 現在選択中のスライドに背景設定
  - **メリット**: 好きなスライドに貼り付け可能、同じ画像を複数スライドに使い回し可能

### 5. 85種類のデザインスタイル
11カテゴリー、85種類のスタイルから選択可能（複数選択可）:

| カテゴリー | スタイル数 | 主なスタイル |
|-----------|----------|------------|
| **アート・絵画** | 8 | 水彩画、油絵、パステル、墨絵、ポップアート、印象派、アールデコ、アールヌーボー |
| **アニメ・マンガ** | 14 | ジブリ風、少年ジャンプ風、少女マンガ風、アメコミ風、ディズニー風、ピクサー風、カートゥーン風、日本アニメ背景、攻殻機動隊風、大友克洋風、劇画風、エヴァンゲリオン風、手塚治虫風、鳥山明風 |
| **デザイン・グラフィック** | 8 | フラットデザイン、マテリアルデザイン、ネオン看板、レトロポスター、タイポグラフィ、コラージュ、グラデーション、イソメトリック |
| **歴史・文化** | 21 | 浮世絵、中世ヨーロッパ、ルネサンス、1920年代、1980年代、古代エジプト、古代ギリシャ、古代ローマ、マヤ・アステカ、メソポタミア、中国宮廷、インド装飾、平安時代、チベット仏教、ペルシャ装飾、オスマン帝国、中世イスラム、ケルト装飾、バイキング、バロック、アフリカンアート |
| **SF・ファンタジー** | 7 | SF未来都市、スチームパンク、ソーラーパンク、ファンタジーRPG、宇宙探査、ディストピア、バイオパンク |
| **写真・リアル** | 6 | フォトリアル、シネマティック、ドキュメンタリー、ファッション雑誌、ストリート写真、建築写真 |
| **ビジネス・企業** | 5 | ビジネス、スタートアップ、テック企業、金融・コンサル、教育・学術 |
| **自然・オーガニック** | 6 | 自然オーガニック、ボタニカル、海洋生物、山岳風景、熱帯雨林、オーロラ |
| **ムード・雰囲気** | 5 | ノワール、ゴシック、パステルドリーム、サイバーパンク、ミニマリズム |
| **エンターテイメント** | 4 | サーカス、音楽フェス、スポーツ、料理・フード |
| **カスタム** | 1 | 自由記述 |

**複数スタイル同時選択**: 可能。プロンプトが自動結合されます。

### 6. LocalStorage設定保存
- **自動保存タイミング**:
  - チェックボックス/セレクト変更時: **即座に保存**
  - テキスト入力: **500ms後に自動保存**（デバウンス）
  - プロンプト生成ボタン押下時: **即座に保存**
- **保存内容**:
  - Gemini APIキー
  - 85種類のデザインスタイル選択状態
  - カスタムスタイルテキスト
  - テキスト表示オプション（4種類）
  - テキスト設定（位置、配置、サイズ、色）
  - エフェクト設定（ドロップシャドウ、グロー）
- **自動復元**: ページ読み込み時に自動的に設定を復元
- **選択カテゴリー自動展開**: 選択済みスタイルのカテゴリーを起動時に自動展開
- **APIキーステータス表示**: 設定済み/未設定 の状態を表示

### 7. テキスト表示設定（詳細カスタマイズ）
全スライド共通設定として以下を調整可能:

#### 日本語タイトル
- **縦位置**: 上部/中央/下部
- **横揃え**: 左寄せ/中央/右寄せ
- **サイズ**: 24px - 96px（デフォルト: 48px）
- **色**: カラーピッカー（デフォルト: #FFFFFF）

#### 英語タイトル（自動計算）
- **位置**: タイトル下（top-center-subtitle）
- **サイズ**: 日本語タイトルの50%
- **色**: #CCCCCC（やや薄め）

#### 日本語メッセージ
- **縦位置**: 下部/中央/上部
- **横揃え**: 左寄せ/中央/右寄せ
- **サイズ**: 20px - 64px（デフォルト: 32px）
- **色**: カラーピッカー（デフォルト: #FFFFFF）
- **テキスト分量**: 少ない/普通/多い

#### 英語メッセージ（自動計算）
- **サイズ**: 日本語メッセージの87.5%
- **色**: #CCCCCC（やや薄め）

#### エフェクト
- **ドロップシャドウ**: 3px offset, 5px blur, 60% opacity, black
- **グロー（外光）**: 5px radius, 40% opacity, テーマカラー

### 8. 出力形式
- **Markdown形式**:
  - ファイル名: `production_guide.md`
  - 各スライドごとに完成プロンプトを記載
  - ダウンロード/コピー機能
- **インタラクティブUI**:
  - スライドカード表示（300px-600px高さのテキストエリア）
  - 個別コピー機能
  - 画像生成ボタン（料金表示付き）
  - サムネイル表示エリア
  - 統計情報表示
  - 検索機能

## ファイル構成

```
slide_gen/
├── Code.gs                      # バックエンドロジック (611行)
│   ├── doGet()                  # HTMLページの配信
│   ├── generatePrompts()        # メイン処理（分析→生成→翻訳）
│   ├── analyzeSpeechwithGemini() # Gemini APIでスピーチ分析
│   ├── generatePromptsForSlides() # プロンプト生成（スライドトピック統合）
│   ├── translatePromptsToEnglish() # プロンプト一括英訳
│   ├── generateImage()          # Gemini 3 Pro Image API画像生成
│   ├── getStyleTemplates()      # スタイルテンプレート取得
│   ├── combineTemplates()       # 複数スタイル結合
│   └── formatAsMarkdown()       # Markdown変換
│
├── PromptTemplates.gs           # 85種類のデザインスタイル
│   └── getAllPromptTemplates()  # 全テンプレート取得
│
├── Index.html                   # フロントエンド UI
│   ├── CSS:
│   │   ├── FreakOut Brand Colors
│   │   ├── .slide-prompt-textarea (300px-600px)
│   │   ├── .btn-generate-image
│   │   ├── .slide-thumbnail
│   │   ├── .image-modal (全画面表示)
│   │   └── .spinner (ローディング)
│   ├── HTML:
│   │   ├── APIキー設定（折りたたみ）
│   │   ├── スピーチ原稿入力（文字数カウント付き、最大10,000文字）
│   │   ├── デザイン選択（85種類、11カテゴリー）
│   │   ├── カスタムスタイル入力
│   │   ├── テキスト詳細設定
│   │   ├── 生成ボタン
│   │   ├── スライドカード（編集可能textarea）
│   │   ├── 画像生成ボタン
│   │   └── サムネイル/モーダル
│   └── JavaScript:
│       ├── LocalStorage管理 (saveSettings, loadSettings, setupAutoSave)
│       ├── APIキーステータス表示 (updateApiKeyStatus)
│       ├── カテゴリー展開 (toggleCategory)
│       ├── テキスト設定取得 (getTextSettings)
│       ├── プロンプト生成・表示
│       ├── 画像生成
│       ├── モーダル表示
│       └── 検索・フィルター
│
├── appsscript.json              # GAS設定
│   ├── timeZone: America/New_York
│   ├── runtimeVersion: V8
│   └── exceptionLogging: STACKDRIVER
│
├── .clasp.json                  # Clasp設定
├── README.md                    # 使い方ガイド
└── CLAUDE.md                    # このファイル
```

## API仕様

### Gemini API設定

- **APIキー**: ユーザー入力（フロントエンドで入力、LocalStorageに保存）
- **取得方法**: [Google AI Studio](https://aistudio.google.com/app/apikey)

### テキスト生成API（Gemini 3 Pro）

| 項目 | 詳細 |
|------|------|
| モデル | `gemini-3-pro-preview` |
| エンドポイント | `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-preview:generateContent` |
| 用途 | スピーチ分析、プロンプト翻訳 |
| 無料キー | ❌ **利用不可**（quota limit: 0） |
| 有料キー | ✅ 利用可能（Cloud Billing必須） |

### 画像生成API（Nano Banana Pro）

| 項目 | 詳細 |
|------|------|
| モデル | `gemini-3-pro-image-preview` |
| エンドポイント | `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent` |
| 用途 | スライド画像生成 |
| 無料キー | ❌ **利用不可**（Cloud Billing必須） |
| 有料キー | ✅ 利用可能 |
| 料金 | 1K/2K画像: $0.134/枚（約20円）、4K画像: $0.24/枚（約36円） |
| 特徴 | テキストレンダリングに優れる（スライド向き） |

### 重要：このツールには有料APIキーが必須

⚠️ **無料のAI Studioキーではこのツールを利用できません**

| 機能 | 無料キー（AI Studio） | 有料キー（Cloud Billing有効） |
|------|----------------------|------------------------------|
| プロンプト生成 | ❌ 利用不可 | ✅ 利用可能 |
| 画像生成 | ❌ 利用不可 | ✅ 利用可能 |

**理由**: `gemini-3-pro-preview` および `gemini-3-pro-image-preview` モデルは、無料キーではクォータが0に設定されています（モデル一覧には表示されますが、実際には利用できません）。

### 参考：Imagen 3.0との違い

| 項目 | Nano Banana Pro（本プロジェクト使用） | Imagen 3.0 |
|------|--------------------------------------|------------|
| モデルID | `gemini-3-pro-image-preview` | `imagen-3.0-generate-001` |
| 料金 | $0.134/枚 | $0.039/枚 |
| 無料枠 | なし | あり |
| テキスト描画 | 優秀 | 標準 |
| 推論能力 | Gemini統合 | なし |

**本プロジェクトではNano Banana Proを使用**（テキスト描画品質がスライド生成に適しているため）

### APIキー検証機能

フロントエンドでAPIキー入力時に自動検証を実行:
- `gemini-3-pro-preview`への実際のリクエストで利用可否を確認
- クォータが0の場合は「有料キーが必要」とエラー表示
- 有効なキーの場合のみ機能を利用可能に

### バックエンド関数

#### `generatePrompts(settings, speechText)`
**パラメータ**:
```javascript
{
  geminiApiKey: "YOUR_API_KEY",  // 必須
  designStyles: ['shonen-jump', 'business-professional'], // 配列
  customStyle: "カスタムスタイルの説明文",
  showJapaneseTitle: true,
  showEnglishTitle: true,
  showJapaneseMessage: true,
  showEnglishMessage: true,
  textSettings: {
    japaneseTitle: {
      position: 'top-center',
      alignment: 'center',
      size: '48px',
      color: '#FFFFFF'
    },
    japaneseMessage: {
      position: 'bottom-center',
      alignment: 'center',
      size: '32px',
      color: '#FFFFFF',
      amount: 'normal'  // 'low', 'normal', 'high'
    },
    effects: {
      dropShadow: true,
      glow: true
    }
  }
}
```

**レスポンス**:
```javascript
{
  success: true,
  markdown: "# スライド画像 制作ガイド...",
  slides: [
    {
      slideNumber: 1,
      japaneseTitle: "新しい始まり",
      englishTitle: "New Beginning",
      japaneseMessage: "ここから未来が始まる",
      englishMessage: "The future starts here",
      prompt: "Think step-by-step about...\n\nCRITICAL INSTRUCTION...",
      englishPrompt: "Think step-by-step about...\n\nCRITICAL INSTRUCTION..."
    },
    ...
  ],
  slideCount: 8,
  statistics: {
    total: 8,
    byRole: {}
  }
}
```

#### `generateImage(prompt, slideNumber, apiKey)`
**パラメータ**:
- `prompt`: 画像生成プロンプト（英語推奨）
- `slideNumber`: スライド番号（トラッキング用）
- `apiKey`: Gemini APIキー（必須）

**レスポンス**:
```javascript
{
  success: true,
  imageData: "base64エンコードされた画像データ",
  slideNumber: 1,
  message: "画像生成が完了しました"
}
```

**エラーレスポンス**:
```javascript
{
  success: false,
  error: "エラーメッセージ",
  errorCode: "NO_API_KEY" | "RATE_LIMIT" | "INVALID_PROMPT" | "API_ERROR" | "EXCEPTION"
}
```

#### `translatePromptsToEnglish(prompts, apiKey)`
**パラメータ**:
- `prompts`: プロンプトの配列
- `apiKey`: Gemini APIキー

**レスポンス**: 翻訳されたプロンプトの配列

- 一括翻訳で文脈を考慮
- 引用符内の日本語テキストも翻訳
- 技術仕様は保持
- マーカー（`---TRANSLATION---`）で分割

## テンプレート仕様

### 構造
```javascript
{
  basePrompt: "詳細なビジュアル仕様",
  fontStyle: "フォント指定",
  messageStyle: "メッセージタイポグラフィ",
  textReadability: "テキスト可読性"
}
```

### プロンプト生成フロー
1. **Thinking Mode トリガー**:
   ```
   Think step-by-step about how to visually represent the presentation topic, then apply the artistic style.
   ```

2. **CRITICAL INSTRUCTION（トピック最優先）**:
   ```
   CRITICAL INSTRUCTION - TOPIC IS MANDATORY:
   The image content MUST visually represent this specific presentation topic: "日本語タイトル" (English Title)
   Key concept to visualize: メッセージ
   ```

3. **VISUAL STYLE TREATMENT**:
   ```
   Apply the following artistic style to the topic-appropriate subject matter:
   [basePrompt from template]
   ```

4. **テキストレンダリング仕様**:
   - 日本語タイトル、英語タイトル、メッセージの詳細指定
   - 位置、配置、サイズ、色、エフェクト
   - 短いテキストは文字ごとにスペルアウト

5. **アスペクト比指定**:
   ```
   Image format must be 16:9 landscape orientation.
   ```

6. **英訳**: 全体を英語に翻訳

## GCP設定情報

| 項目 | 値 |
|------|-----|
| **プロジェクト名** | speech-to-slides-public |
| **App ID** | 800676713852 |
| **Deploy ID** | AKfycbwwlt4Pn40KBFUJ-r8h7OM2SLqU_14piRWkKeqVb1svRStXHneY5cRBr-rhGCJImP4Qiw |
| **Script ID** | 1H-U7cSr-Qfqny-xOZNuooIBPJQE2XDfG5HtAyFZqW4uu1vB9MHvPouYN |
| **アカウント** | honda@fout.jp |
| **テスター** | honda@fout.jp, honda@ofinventi.one |

## デプロイ手順

### Marketplace アドオン（slides_addon）

**デプロイメントID**: `AKfycbwwlt4Pn40KBFUJ-r8h7OM2SLqU_14piRWkKeqVb1svRStXHneY5cRBr-rhGCJImP4Qiw`

#### 標準デプロイ手順

**⚠️ 重要: Marketplace アドオンは GCP Console「公開」まで必須！**

`clasp redeploy` は不要です（Marketplace には影響しないため）。

##### ステップ1: コード更新とプッシュ

```bash
cd slides_addon

# 1. Code.gsのバージョン定数を更新（7-10行目）
#    - ADDON_VERSION: セマンティックバージョン（例: '1.4.4'）
#    - ADDON_BUILD_DATE: 今日の日付（例: '2025-11-30'）
#    - ADDON_DEPLOY_NUMBER: 次のバージョン番号

# 2. コードをプッシュ
clasp push --force

# 3. バージョン作成（番号をメモ）
clasp version "変更内容"
# → Created version X が出力される
```

##### ステップ2: GCP Console で公開（必須！）

**URL**: https://console.cloud.google.com/apis/api/appsmarket-component.googleapis.com/googleapps_sdk?project=speech-to-slides-public

1. **「アプリの構成」タブ**をクリック
2. 「スライド アドオン スクリプトのバージョン」を**新しい番号に変更**（例: 39）
3. **「下書きを保存」**ボタンをクリック
4. ダイアログが出たら**「OK」**をクリック
5. **「ストアの掲載情報」タブ**をクリック
6. **「公開」**ボタンをクリック
7. **「アップデートが公開されました」**と表示されれば完了

##### Claude Code による自動デプロイ

Claude Codeがデプロイを行う場合、ステップ1実行後に以下のMCPツールでGCP Console操作を自動化：

```
1. mcp__chrome-devtools-extension__navigate_page → https://console.cloud.google.com/apis/api/appsmarket-component.googleapis.com/googleapps_sdk?project=speech-to-slides-public
2. mcp__chrome-devtools-extension__wait_for → "アプリの構成"
3. mcp__chrome-devtools-extension__click → 「アプリの構成」タブ
4. mcp__chrome-devtools-extension__fill → バージョン番号入力
5. mcp__chrome-devtools-extension__click → 「下書きを保存」
6. mcp__chrome-devtools-extension__wait_for → "下書きを保存しました"
7. mcp__chrome-devtools-extension__click → 「OK」
8. mcp__chrome-devtools-extension__click → 「ストアの掲載情報」タブ
9. mcp__chrome-devtools-extension__wait_for → "公開"
10. mcp__chrome-devtools-extension__click → 「公開」ボタン
11. mcp__chrome-devtools-extension__wait_for → "アップデートが公開されました"
```

#### Code.gsバージョン定数

```javascript
// Code.gs 冒頭（7-10行目）
const ADDON_VERSION = '1.5.0';        // セマンティックバージョン
const ADDON_BUILD_DATE = '2025-11-30'; // ビルド日
const ADDON_DEPLOY_NUMBER = 40;        // GCP Consoleに入力する番号
```

**UI表示例**: `v1.5.0 @40 (2025-11-30)`

#### なぜGCP Console公開が必須なのか？

2025-11-30 検証済み：

| 操作 | 効果 | Marketplaceへの反映 |
|------|------|---------------------|
| `clasp push` | ソースコード更新 | ❌ |
| `clasp version` | バージョン作成 | ❌ |
| `clasp redeploy` | デプロイID更新（不要） | ❌ |
| **GCP Console「公開」** | **Marketplace公開** | **✅** |

- Marketplace アプリは GCP Console で管理される**別レイヤー**
- `clasp` コマンドは Apps Script 側のみ操作
- ユーザーに届けるには GCP Console「公開」が必須

#### 審査送信フロー（初回公開・更新時）

1. **clasp push & version**: コードをプッシュしてバージョン作成
2. **アプリの構成**: バージョン番号を更新 → 「下書きを保存」
3. **ストアの掲載情報**: 必要に応じてテスター追加
4. **審査のため送信**: ボタンをクリック → 確認ダイアログで「審査のために送信」
5. **審査待ち**: 「ドラフトは審査中のため編集できません」と表示される

**注意**: 審査中は編集不可。編集が必要な場合は「審査をキャンセル」してから行う。

#### 審査中の動作確認方法（テストデプロイ）

審査中はGCP Consoleのバージョン番号を変更できないため、Marketplace経由では最新コードをテストできない。
この場合、GASエディタの「デプロイをテスト」機能を使用する。

**特徴**:
- 審査状況・Marketplaceに関係なく、即座に最新コードをテスト可能
- 開発者アカウントにのみインストールされる（他ユーザーには影響なし）
- `clasp push` 後、バージョン作成なしでも "最新コード (Head)" でテスト可能

**手順**:

##### ステップ1: GASエディタを開く

```
https://script.google.com/home/projects/1H-U7cSr-Qfqny-xOZNuooIBPJQE2XDfG5HtAyFZqW4uu1vB9MHvPouYN/edit
```

##### ステップ2: テストデプロイをインストール

1. 右上の **「デプロイ」** ボタンをクリック
2. **「デプロイをテスト」** を選択
3. 「種類の選択」で **「Google Workspace アドオン」** を確認
4. 「バージョン」で **「Test latest code」** または特定バージョンを選択
5. **「インストール」** ボタンをクリック
6. 「アドオンをインストールしました」と表示されれば完了

##### ステップ3: Google Slidesで動作確認

1. Google Slidesを開く（または既存のSlidesをリロード）
2. 拡張機能 > スライド生成アドオン > サイドバーを開く
3. サイドバー下部のバージョン表示で最新版を確認

##### ステップ4: テスト終了後のクリーンアップ

テスト終了後は、テストデプロイをアンインストールしてMarketplace版に戻す：

1. GASエディタで「デプロイ」>「デプロイをテスト」
2. **「アンインストール」** ボタンをクリック
3. Google Slidesをリロード → Marketplace版が動作する

##### Claude Codeによる自動テストデプロイ

```
1. mcp__chrome-devtools-extension__navigate_page → https://script.google.com/home/projects/1H-U7cSr-Qfqny-xOZNuooIBPJQE2XDfG5HtAyFZqW4uu1vB9MHvPouYN/edit
2. mcp__chrome-devtools-extension__wait_for → "デプロイ"
3. mcp__chrome-devtools-extension__click → 「デプロイ」ボタン
4. mcp__chrome-devtools-extension__click → 「デプロイをテスト」メニュー
5. mcp__chrome-devtools-extension__wait_for → "デプロイをテスト" (ダイアログ)
6. mcp__chrome-devtools-extension__click → 「インストール」ボタン
7. mcp__chrome-devtools-extension__wait_for → "アンインストール" (インストール完了の確認)
8. mcp__chrome-devtools-extension__click → 「完了」ボタン
```

**注意事項**:
- テストデプロイは開発者（GASプロジェクトの編集権限を持つユーザー）のみ使用可能
- 外部テスターにはこの方法は使えない（Marketplace版を待つ必要がある）
- `clasp redeploy` はMarketplaceアドオンには効果がない（別レイヤーのため）

#### デプロイ確認
```bash
clasp deployments
# → @N でバージョン番号を確認
```

### Web App（web_app）

```bash
cd web_app
clasp push --force && clasp deploy -d "vX: 説明"
```

## 使い方

### 基本フロー
1. URLにアクセス
2. **APIキー設定**（初回のみ、LocalStorageに保存）
   - Google AI Studioでキーを取得
   - 「🔑 Gemini APIキー設定」を展開して入力
3. デザインテイスト選択（複数可）
   - 選択済みカテゴリーは次回起動時に自動展開
4. テキスト設定を調整（オプション）
5. スピーチ原稿を入力（最大10,000文字）
6. 「プロンプトを生成」クリック
   - 設定が自動保存される
7. 生成されたプロンプトを確認・編集
   - textareaで直接編集可能
   - blur時に自動保存
8. 画像生成（オプション）
   - 「🎨 画像生成 [約20円/枚]」クリック
   - サムネイル表示 → クリックで拡大
   - ダウンロードまたは削除

### 料金
- **プロンプト生成**: 従量課金（有料APIキー必須）
- **画像生成**: **約20円/枚**
  - 16:9 アスペクト比
  - safetyFilterLevel: block_none
- ⚠️ **注意**: 無料のAI Studioキーでは利用できません

## トラブルシューティング

### APIキーエラー
- APIキーが入力されているか確認（基本設定を展開）
- APIキーステータスが「✓ 設定済み」になっているか確認
- [Google AI Studio](https://aistudio.google.com/app/apikey)でキーを再生成

### プロンプト生成エラー
- クォータが残っているか確認（15 RPM制限）
- スピーチ原稿が入力されているか確認

### 画像生成エラー
- **NO_API_KEY**: APIキーが未設定
- **429エラー**: レート制限。しばらく待ってから再試行
- **400エラー**: 無効なプロンプト。内容を修正
- **料金**: 画像生成は約20円/枚かかります

### 設定が保存されない
- LocalStorageが有効か確認
- プライベートブラウジングモードでは保存されません
- ブラウザーキャッシュクリアで設定も消えます

### 日本語が文字化け
- GASプロジェクトのタイムゾーンを「東京」に設定
- ファイルの文字コードがUTF-8か確認

## セキュリティ

### APIキーの保護
- **ユーザー入力方式**: APIキーはユーザーがフロントエンドで入力
- **LocalStorage保存**: ブラウザーのLocalStorageに保存（サーバーに送信されない）
- **パスワード型入力**: `type="password"` で入力内容を隠す

### 公開範囲の設定
- デプロイ時の「アクセスできるユーザー」を適切に設定
- 社内限定: 「ドメイン内のユーザー」
- 外部公開: 各自のAPIキーを使用するため安全

## 実装の詳細

### プロンプト編集機能
- `<textarea class="slide-prompt-textarea">` で直接編集
- `autoResizeTextarea()`: 内容に応じて高さ調整（300px-600px）
- `blur` イベントで `allSlides` を更新・Markdown再生成
- `showSaveIndicator()`: 保存完了を視覚的に表示

### 画像生成機能（2段階ワークフロー v1.5.0〜）
- **フロントエンド（Sidebar.html）**:
  - `generateWallpaper(index)`: 画像生成のみ（背景設定なし）
  - `applyBackgroundToActive(index)`: 選択中スライドに背景設定
  - `showThumbnail(index, imageData, mimeType)`: サムネイル＋ボタン表示
  - 英語版プロンプトを優先使用
  - ローディングスピナー表示
- **バックエンド（Code.gs）**:
  - `generateImageOnly(prompt, slideNumber, apiKey)`: 画像生成のみ
  - `setSlideBackground(slideIndex, imageBase64, mimeType)`: 背景設定
  - `generateAndSetBackground()`: 従来の一括処理（generateWallpaperToActive用）
  - `responseModalities: ['image']` で画像モードを指定
  - Base64エンコード画像を返却
  - エラーハンドリング（NO_API_KEY, 429, 400, その他）

### LocalStorage管理（Index.html:1711-1987）
- `saveSettings()`: 全設定をJSON保存（APIキー含む）
- `loadSettings()`: ページ読み込み時に復元
- `setupAutoSave()`: イベントリスナー設定
  - checkbox/select: change時即座に保存
  - input/textarea: input時500ms後に保存（デバウンス）
- `updateApiKeyStatus()`: APIキーの設定状態を表示
- **選択カテゴリー自動展開**:
  - styleToCategoryMap: 全85スタイルとカテゴリーのマッピング
  - 選択済みスタイルのカテゴリーを自動的に展開

### プロンプト英訳機能（Code.gs:289-355）
- `translatePromptsToEnglish(prompts, apiKey)`: 一括翻訳
- Gemini 3 Pro APIで翻訳
- 技術仕様を保持しながら自然な英訳
- マーカー分割で複数プロンプトを処理

## ⚠️ 重要：Gemini API JSON出力の正しい設定（絶対に変更しないこと）

### 問題の背景
Gemini 3 Pro Preview APIでJSON配列を確実に取得するには、特定の設定が必須。
設定を間違えると、以下のような問題が発生する：
- 説明テキストが返される（JSONではなく）
- 改行区切りのオブジェクト `{...}\n{...}` が返される（配列ではなく）
- パースエラーが発生する

### 重要な発見（2025-11-27）

Webリサーチにより、**`responseSchema`とプロンプト内のJSON指示が競合する**ことが判明。
- 参考: https://github.com/google-gemini/deprecated-generative-ai-python/issues/541
- `responseSchema`を使用すると、プロンプト内のJSON形式指示と競合し、不安定な出力になる
- 解決策: **`responseSchema`を使わず、`responseMimeType: "application/json"`のみ使用** + プロンプトでJSON形式を指示

### 正しい設定（Code.gs）

```javascript
// ✅ 正しい設定 - responseSchemaは使わない
// NOTE: responseSchema was removed due to inconsistent behavior with Gemini 3 Pro Preview
// See: https://github.com/google-gemini/deprecated-generative-ai-python/issues/541
// Using responseMimeType: "application/json" + prompt instructions instead
const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
        maxOutputTokens: maxOutputTokens,
        responseMimeType: "application/json"  // これだけでOK
        // responseSchema: は使わない！プロンプトと競合する
    }
};
```

### プロンプト内でのJSON指示（必須）

プロンプトの末尾に以下のようなJSON形式の指示を含める：

```
以下のJSON形式で出力してください：
[
  {
    "slideNumber": 1,
    "japaneseTitle": "タイトル",
    "englishTitle": "Title",
    "japaneseMessage": "メッセージ",
    "englishMessage": "Message",
    "visualDescription": "ビジュアル説明",
    "visualDescriptionEn": "Visual description"
  }
]
```

### 🚫 絶対にやってはいけないこと

1. **thinkingConfigを追加しない**
   ```javascript
   // ❌ 禁止 - JSON出力と互換性がない
   generationConfig: {
       responseMimeType: "application/json",
       thinkingConfig: { thinkingBudget: 1000 }  // これを追加するとJSONが壊れる
   }
   ```

2. **responseSchemaをプロンプトと併用しない**
   ```javascript
   // ❌ 禁止 - プロンプトのJSON指示と競合して不安定になる
   generationConfig: {
       responseMimeType: "application/json",
       responseSchema: { ... }  // プロンプトにJSON例がある場合は使わない
   }
   ```

3. **responseMimeTypeを省略しない**
   ```javascript
   // ❌ 禁止 - テキスト説明が返される
   generationConfig: {
       // responseMimeTypeがないとJSONにならない
   }
   ```

### JSONパース（tryParseJsonArray関数）

Gemini APIが時々 `{...}` 形式で返すことがあるため、複数のパース方法を試す：

1. `[` で始まる場合 → 直接JSON.parse
2. `{` で始まる場合 → `[` と `]` で囲んでパース
3. 上記失敗時 → 正規表現で配列部分を抽出

### デバッグ方法

GASエディタで実行ログを確認：
1. スクリプトエディタを開く
2. 「実行」メニュー → 関数を選択して実行
3. 「実行数」タブでログを確認
4. console.log出力が表示される

### 参考資料
- [GitHub Issue #541](https://github.com/google-gemini/deprecated-generative-ai-python/issues/541) - responseSchemaとプロンプトの競合問題
- `responseMimeType: "application/json"` のみ使用が安定
- `thinkingConfig` はJSON出力モードと**互換性がない**

## 更新履歴

- **v1.5.0** (2025-11-30): 2段階壁紙ワークフロー
  - **生成と貼り付けを分離**: 壁紙生成→サムネイル表示→貼り付けボタンで選択スライドに適用
  - **generateImageOnly()追加**: 画像生成のみ（背景設定なし）
  - **applyBackgroundToActive()追加**: 選択中スライドに背景設定
  - **UIボタン変更**: サムネイル下に「💾 保存」「📋 貼り付け」ボタン
  - **メリット**: 好きなスライドに貼り付け可能、同じ画像を複数スライドに使い回し可能

- **v1.4.x** (2025-11-30): バージョン管理改善
  - **デプロイ手順明確化**: GCP Console公開が必須であることを文書化
  - **バージョン定数追加**: ADDON_VERSION, ADDON_BUILD_DATE, ADDON_DEPLOY_NUMBER

- **v1.3** (2025-11-27): JSON出力安定化
  - **responseSchema削除**: プロンプトとの競合問題を解決
  - **tryParseJsonArray追加**: 複数のJSON形式に対応するパーサー
  - **ドキュメント更新**: 正しいAPI設定方法を記載
  - **参考**: GitHub Issue #541

- **v1.2** (2025-11-25): ドキュメント更新・整合性修正
  - **85種類スタイル**: 正確なスタイル数に修正（旧63種類）
  - **歴史・文化カテゴリー拡充**: 21種類に（古代文明、東洋、中東、ヨーロッパ装飾など追加）
  - **アニメ・マンガカテゴリー拡充**: 14種類に（攻殻機動隊、AKIRA、劇画など追加）
  - **APIキー入力方式**: ユーザー入力式に変更
  - **Gemini 3 Pro Image**: Nano Banana Pro対応

- **v1.1** (2025-11-24): 大規模機能追加
  - **画像生成機能**: Gemini 3 Pro Image API統合（約20円/枚）
  - **プロンプト直接編集**: textarea化、自動保存
  - **プロンプト自動英訳**: 文脈を考慮した高品質翻訳
  - **LocalStorage保存**: 全設定の自動保存・復元
  - **選択カテゴリー自動展開**: 起動時に選択済みカテゴリーを展開
  - **料金表示**: ボタンに「約20円/枚」表示
  - **テキストエリア高さ拡大**: 300px-600px
  - **スライドトピック統合**: プロンプトにトピックを明示

- **v1.0** (2025-11-24): 初回リリース
  - Gemini 3 Pro統合
  - 7つのデザインスタイル
  - テキスト詳細設定
  - インタラクティブUI

## ライセンス

MIT License
