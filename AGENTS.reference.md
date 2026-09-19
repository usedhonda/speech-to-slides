# AGENTS.md Supplementary Technical Appendix

Read this file together with AGENTS.md. It contains detailed implementation guidance, strict JSON-output rules, historical notes, and the license that were moved out of AGENTS.md to keep the shared entrypoint below the size limit.

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
