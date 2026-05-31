// noteのRSSをサーバー側で取得し、ブログ用のJSONに整形して返すNetlify Function。
// ブラウザから直接noteを叩くとCORSで失敗するため、同一オリジンのこの関数を経由させる。
// 10分間のキャッシュ付き。失敗時は posts:[] を返し、フロント側のフォールバックに任せる。

const RSS_URL = 'https://note.com/ready_bison5376/rss';

function decodeEntities(s) {
  return s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&');
}

function stripCdata(s) {
  return s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').trim();
}

function getTag(block, tag) {
  const re = new RegExp('<' + tag + '[^>]*>([\\s\\S]*?)</' + tag + '>', 'i');
  const m = block.match(re);
  return m ? stripCdata(m[1]).trim() : '';
}

function parseItems(xml) {
  const items = [];
  const itemRe = /<item>([\s\S]*?)<\/item>/g;
  let m;
  while ((m = itemRe.exec(xml)) !== null) {
    const block = m[1];
    const title = decodeEntities(getTag(block, 'title'));
    const link = getTag(block, 'link');
    const pubDate = getTag(block, 'pubDate');

    // 画像: media:thumbnail（テキスト or url属性）→ media:content → enclosure の順で探す
    let image = getTag(block, 'media:thumbnail');
    if (!image) {
      const mc = block.match(/<media:(?:thumbnail|content)[^>]*\burl="([^"]+)"/i);
      if (mc) image = mc[1];
    }
    if (!image) {
      const en = block.match(/<enclosure[^>]*\burl="([^"]+)"/i);
      if (en) image = en[1];
    }

    // 抜粋: HTMLタグを除去し、noteの定型句「続きをみる」を取り除く
    let excerpt = getTag(block, 'description')
      .replace(/<[^>]+>/g, ' ');
    excerpt = decodeEntities(excerpt).replace(/\s+/g, ' ').trim();
    excerpt = excerpt.replace(/続きをみる/g, '').trim();

    // 日付: YYYY-MM-DD に正規化
    let date = '';
    if (pubDate) {
      const d = new Date(pubDate);
      if (!isNaN(d.getTime())) {
        const y = d.getFullYear();
        const mo = String(d.getMonth() + 1).padStart(2, '0');
        const da = String(d.getDate()).padStart(2, '0');
        date = y + '-' + mo + '-' + da;
      }
    }

    if (title && link) {
      items.push({ title, link, date, excerpt, image });
    }
  }
  return items;
}

export const handler = async () => {
  try {
    const res = await fetch(RSS_URL, {
      headers: { 'User-Agent': 'Mozilla/5.0 (blog.hirosuwa.com RSS fetcher)' },
    });
    if (!res.ok) throw new Error('RSS fetch failed: ' + res.status);
    const xml = await res.text();
    const posts = parseItems(xml).slice(0, 12);
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'public, max-age=600, s-maxage=600',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ posts }),
    };
  } catch (err) {
    return {
      statusCode: 502,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: String((err && err.message) || err), posts: [] }),
    };
  }
};
