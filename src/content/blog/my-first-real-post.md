---
title: '18時間の戦いの末、ついに完成したブログ'
description: 'Sanityで苦戦した後、Astroで5分で作れた話'
pubDate: '2025-07-14'
heroImage: '../../assets/blog-placeholder-2.jpg'
---

## ついに完成！

18時間以上かけてSanityとReactでブログを作ろうとして、React error #31に悩まされ続けた末、Astroで5分でブログが完成しました。

## 学んだこと

### 1. シンプルが一番
複雑なCMSやフレームワークは必要ありませんでした。Markdownファイルで十分です。

### 2. Astroの素晴らしさ
- **超高速** - ページの読み込みが一瞬
- **エラーなし** - React error #31とはおさらば
- **簡単** - Markdownを書くだけ

### 3. 時には諦めることも大切
Sanityにこだわり続けるより、別の解決策を探すほうが賢明でした。

## これからの計画

1. **もっと記事を書く** - 技術的な内容を中心に
2. **デザインをカスタマイズ** - CSSを編集して独自のスタイルに
3. **機能追加** - コメント機能やニュースレターなど

## コード例も簡単に書ける

```javascript
// Astroでブログを始める
npm create astro@latest my-blog -- --template blog
cd my-blog
npm run dev
```

```css
/* カスタムスタイルも追加できる */
.my-custom-class {
  color: #ff6b6b;
  font-weight: bold;
}
```

## まとめ

もし同じような問題で悩んでいる人がいたら、**Astroを試してみてください**。本当に5分で動くブログが作れます。

ありがとう、Astro！そして、さようなら React error #31！