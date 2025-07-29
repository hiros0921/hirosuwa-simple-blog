// ブログ記事のデータ構造
const blogPosts = [
    {
        id: 1,
        title: "次世代のWeb開発トレンド",
        excerpt: "AIとWebAssemblyが変える未来のフロントエンド開発について深く掘り下げます。",
        content: `
            # 次世代のWeb開発トレンド
            
            ## はじめに
            Web開発の世界は日々進化しています...
            
            ## AIの活用
            - GitHub Copilot
            - ChatGPT API
            - 画像生成AI
            
            ## WebAssemblyの可能性
            ブラウザ上でネイティブに近いパフォーマンスを実現...
        `,
        date: "2024-01-20",
        readTime: 5,
        category: ["Tech", "AI"],
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop"
    }
];

// 記事一覧を表示する関数
function displayBlogPosts() {
    const container = document.getElementById('blog-posts-container');
    container.innerHTML = '';
    
    blogPosts.forEach(post => {
        const postHTML = `
            <article class="glass-effect rounded-2xl overflow-hidden hover-glow animated-border group cursor-pointer transform transition-all duration-300 hover:scale-105">
                <div class="h-48 relative overflow-hidden">
                    <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div class="p-8">
                    <div class="flex items-center justify-between mb-4 text-sm text-gray-400">
                        <div class="flex items-center gap-2">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 8h12v8H4V8z" clip-rule="evenodd"></path>
                            </svg>
                            <span>${post.date}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                            </svg>
                            <span>${post.readTime}分</span>
                        </div>
                    </div>
                    <h3 class="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">${post.title}</h3>
                    <p class="text-gray-300 mb-6 leading-relaxed line-clamp-3">${post.excerpt}</p>
                    <div class="flex items-center justify-between">
                        <span class="text-blue-400 font-medium group-hover:text-blue-300 transition-colors flex items-center gap-2">
                            続きを読む
                            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </span>
                        <div class="flex space-x-2">
                            ${post.category.map(cat => `<span class="px-3 py-1 bg-blue-500/20 rounded-full text-xs">${cat}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </article>
        `;
        container.innerHTML += postHTML;
    });
}

// Markdownをパースする簡易関数
function parseMarkdown(markdown) {
    return markdown
        .replace(/# (.*?)$/gm, '<h1>$1</h1>')
        .replace(/## (.*?)$/gm, '<h2>$2</h2>')
        .replace(/- (.*?)$/gm, '<li>$1</li>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/^/, '<p>')
        .replace(/$/, '</p>');
}