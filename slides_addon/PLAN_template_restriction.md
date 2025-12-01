# テンプレート制限機能 実装計画

## 概要
認証ドメイン外（オープンアクセス）のユーザーに対して、バイネーム（著作者名・作品名）を含むテンプレートを非表示にする。

## 要件
- **対象**: 32個のバイネームテンプレート
- **制限対象ユーザー**: 認証ドメイン（fout.jp, uuum.jp）以外のユーザー
- **UI動作**: 完全非表示（グレーアウトではない）

## 制限対象テンプレート（32個）

### ジャンプ系（8個）
- toriyama, onepiece, jojo, bleach, kimetsu, chainsaw, naruto, hunterxhunter

### マガジン・サンデー系（3個）
- shingeki, takahashi, tezuka

### 少女マンガ系（3個）
- sailormoon, versailles, nana

### 青年マンガ系（3個）
- goldenkamuy, akira, ghost-in-shell

### アニメスタジオ系（5個）
- studio-ghibli, shinkai, evangelion, kyoani, trigger

### 海外アニメ系（10個）
- disney-classic, pixar-3d, spiderverse, timburton, simpsons, southpark, american-comics, cartoon-network, dreamworks, illumination

## 実装手順

### Step 1: Code.gs - 制限テンプレートリスト定義
- `RESTRICTED_TEMPLATES` 配列を追加
- 32個のテンプレートIDを定義

### Step 2: Code.gs - テンプレート取得関数修正
- `getAvailableTemplates(isAuthorized)` 関数を追加
- 認証状態に応じてフィルタリング

### Step 3: Code.gs - サイドバー生成時に認証情報渡す
- `onHomepage()` で認証状態を判定
- サイドバーにパラメータとして渡す

### Step 4: Sidebar.html - テンプレート表示制御
- 認証状態を受け取る
- 制限テンプレートを非表示にする
- カテゴリー内のテンプレートが全て制限対象の場合、カテゴリーごと非表示

## 実装詳細

### Code.gs 変更箇所

```javascript
// 制限テンプレートリスト
const RESTRICTED_TEMPLATES = [
  // ジャンプ系
  'toriyama', 'onepiece', 'jojo', 'bleach', 'kimetsu', 'chainsaw', 'naruto', 'hunterxhunter',
  // マガジン・サンデー系
  'shingeki', 'takahashi', 'tezuka',
  // 少女マンガ系
  'sailormoon', 'versailles', 'nana',
  // 青年マンガ系
  'goldenkamuy', 'akira', 'ghost-in-shell',
  // アニメスタジオ系
  'studio-ghibli', 'shinkai', 'evangelion', 'kyoani', 'trigger',
  // 海外アニメ系
  'disney-classic', 'pixar-3d', 'spiderverse', 'timburton', 'simpsons',
  'southpark', 'american-comics', 'cartoon-network', 'dreamworks', 'illumination'
];

// テンプレート取得（認証状態でフィルタ）
function getFilteredTemplates(isAuthorized) {
  const allTemplates = getAllPromptTemplates();
  if (isAuthorized) {
    return allTemplates; // 全85テンプレート
  }
  // 制限テンプレートを除外
  const filtered = {};
  for (const [key, value] of Object.entries(allTemplates)) {
    if (!RESTRICTED_TEMPLATES.includes(key)) {
      filtered[key] = value;
    }
  }
  return filtered; // 53テンプレート
}
```

### Sidebar.html 変更箇所

```html
<!-- テンプレート選択セクション（動的生成に変更） -->
<script>
  const isAuthorized = <?= isAuthorized ?>;
  const restrictedTemplates = <?= JSON.stringify(RESTRICTED_TEMPLATES) ?>;

  // 制限テンプレートを非表示
  function hideRestrictedTemplates() {
    if (isAuthorized) return; // 認証済みなら何もしない

    restrictedTemplates.forEach(templateId => {
      const checkbox = document.querySelector(`input[value="${templateId}"]`);
      if (checkbox) {
        checkbox.closest('.style-option').style.display = 'none';
      }
    });

    // 空になったカテゴリーを非表示
    document.querySelectorAll('.category').forEach(category => {
      const visibleOptions = category.querySelectorAll('.style-option:not([style*="display: none"])');
      if (visibleOptions.length === 0) {
        category.style.display = 'none';
      }
    });
  }

  // ページ読み込み時に実行
  document.addEventListener('DOMContentLoaded', hideRestrictedTemplates);
</script>
```

## テスト計画

1. **認証ドメインユーザー（fout.jp, uuum.jp）**
   - 全85テンプレートが表示されること
   - 全テンプレートが選択・使用可能なこと

2. **オープンアクセスユーザー**
   - 53テンプレートのみ表示されること
   - 制限テンプレートが完全に非表示なこと
   - 空カテゴリーが非表示なこと

## 影響範囲

- Code.gs: 制限リスト追加、フィルタ関数追加
- Sidebar.html: テンプレート表示制御追加
- PromptTemplates.gs: 変更なし

## リスク

- なし（既存機能への影響なし、追加機能のみ）
