---
title: 'Astroでブログを書く方法'
description: '簡単にブログ記事を追加する方法を説明します'
pubDate: '2025-07-14'
heroImage: '../../assets/blog-placeholder-1.jpg'
---

## 新しい記事の作成手順

### 1. ファイルを作成
`src/content/blog/` フォルダに新しい `.md` ファイルを作成します。

例：`my-new-post.md`

### 2. フロントマター（記事の情報）を書く
```yaml
---
title: '記事のタイトル'
description: '記事の説明（SEO用）'
pubDate: '2025-07-14'
heroImage: '../../assets/blog-placeholder-1.jpg'
---
```

### 3. 本文を書く
フロントマターの下に、Markdown形式で記事を書きます。

## Markdownの基本

### 見出し
```markdown
# 大見出し（H1）
## 中見出し（H2）
### 小見出し（H3）
```

### リスト
```markdown
- 項目1
- 項目2
- 項目3

1. 番号付き項目1
2. 番号付き項目2
```

### リンク
```markdown
[リンクテキスト](https://example.com)
```

### 画像
```markdown
![代替テキスト](../../assets/my-image.jpg)
```

### コードブロック
\```javascript
const greeting = "Hello, World!";
console.log(greeting);
\```

### 強調
```markdown
**太字**
*斜体*
```

## 画像の追加方法

1. 画像を `src/assets/` フォルダに入れる
2. Markdownで参照：
   ```markdown
   ![説明](../../assets/your-image.jpg)
   ```

## 記事の公開

1. ファイルを保存
2. `npm run dev` でプレビュー
3. GitHubにプッシュ
4. Netlifyが自動的にデプロイ

簡単でしょう？😊