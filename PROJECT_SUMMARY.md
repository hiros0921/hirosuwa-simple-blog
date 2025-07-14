# HiroSuwa Simple Blog プロジェクトまとめ

## 🎉 プロジェクト完成！

### 経緯
- **問題**: Sanity + Reactで18時間以上かけてもReact error #31が解決できなかった
- **解決**: Astroに切り替えて5分で動くブログが完成！

## 📅 2025年7月14日の作業内容

### 1. 問題の診断
- React error #31（オブジェクトを直接レンダリング）
- 複数のコンポーネントでnullエラー
- Sanity APIとの連携問題
- 本番環境でのみ発生するエラー

### 2. 解決策の検討
- microCMS（日本製CMS）
- Contentful
- **Astro + Markdown**（採用！）

### 3. 新プロジェクト作成
```bash
npm create astro@latest hirosuwa-simple-blog -- --template blog --typescript --install --no-git --yes
```

### 4. カスタマイズ
- サイトタイトル変更: "HiroSuwa Blog"
- 日本語の説明文追加
- 記事の作成方法を学習
- 最初の記事を作成

### 5. 成果
- ✅ エラーなし
- ✅ 超高速（ビルド時間: 1.31秒）
- ✅ 簡単（Markdownで記事を書くだけ）
- ✅ SEO対応済み
- ✅ レスポンシブデザイン

## 📝 ブログの書き方

### 新しい記事を作成
1. `src/content/blog/`に`.md`ファイルを作成
2. フロントマター（記事情報）を書く：
```yaml
---
title: '記事タイトル'
description: '記事の説明'
pubDate: 'Jul 14 2025'
heroImage: '../../assets/blog-placeholder-1.jpg'
---
```
3. Markdown形式で本文を書く

### 画像の追加
- `src/assets/`に画像を配置
- Markdownで参照: `![説明](../../assets/image.jpg)`

## 🚀 デプロイ方法

### GitHubへのプッシュ
```bash
git add .
git commit -m "記事を追加"
git push
```

### Netlifyでの自動デプロイ
1. GitHubにプッシュ
2. Netlifyが自動的にビルド・デプロイ
3. 5分後にはhirosuwa.comで公開！

## 📊 技術スタック

- **フレームワーク**: Astro v5.11.0
- **言語**: TypeScript
- **スタイリング**: CSS
- **ホスティング**: Netlify
- **ドメイン**: hirosuwa.com (Cloudflare DNS)

## 🔧 コマンド一覧

```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview
```

## 📁 プロジェクト構造

```
hirosuwa-simple-blog/
├── src/
│   ├── content/
│   │   └── blog/        # ブログ記事（Markdown）
│   ├── assets/          # 画像
│   ├── components/      # Astroコンポーネント
│   ├── layouts/         # レイアウト
│   └── pages/           # ページ
├── public/              # 静的ファイル
└── package.json
```

## 🎯 今後の計画

1. VS Codeのインストール
2. もっと記事を書く
3. デザインのカスタマイズ
4. Google Analytics追加
5. コメント機能の検討

## 感想

18時間の苦労の末、シンプルな解決策にたどり着きました。
時には複雑な技術より、シンプルで確実な方法を選ぶことが大切だと学びました。

Astroは本当に素晴らしいフレームワークです！