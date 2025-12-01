# clasp によるGASプロジェクト管理

## セットアップ手順

### 1. clasp のインストール

```bash
npm install -g @google/clasp
```

### 2. Google アカウントでログイン

```bash
clasp login
```

ブラウザが開くので、Googleアカウントで認証してください。

### 3. 新しいGASプロジェクトを作成

```bash
cd /Users/usedhonda/projects/others/image_gen/gas-app
clasp create --type webapp --title "スライドプロンプト生成ツール"
```

または、既存のプロジェクトにリンクする場合：

```bash
clasp clone <SCRIPT_ID>
```

### 4. ファイルをプッシュ

```bash
clasp push
```

### 5. ウェブアプリとしてデプロイ

```bash
clasp deploy --description "v1.0"
```

またはブラウザで開いてデプロイ：

```bash
clasp open
```

## ファイル構成

```
gas-app/
├── Code.gs           # バックエンドロジック
├── Index.html        # ウェブUI
├── appsscript.json   # GASプロジェクト設定
├── .clasp.json       # clasp設定（gitignore推奨）
└── README.md
```

## よく使うコマンド

```bash
# コードをプッシュ
clasp push

# GASエディタをブラウザで開く
clasp open

# ローカルにプル（リモートの変更を取得）
clasp pull

# デプロイ一覧を表示
clasp deployments

# ログを表示
clasp logs
```

## 注意事項

**`.clasp.json` は gitignore に追加してください**（スクリプトIDが含まれるため）

```.gitignore
gas-app/.clasp.json
```

## トラブルシューティング

### エラー: "User has not enabled the Apps Script API"
1. https://script.google.com/home/usersettings にアクセス
2. 「Google Apps Script API」をONにする

### プッシュ時にエラーが出る
- `clasp push --force` で強制プッシュ
- `.claspignore` ファイルで除外設定を追加
