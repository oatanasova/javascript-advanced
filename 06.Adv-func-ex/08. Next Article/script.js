function getArticleGenerator(articles) {
    let index = 0;

    return function showNext() {
        if (index < articles.length) {
        let textArea = document.getElementById('content');
        let article = document.createElement('article')

        article.className = 'flex';
        article.textContent = articles[index];

        textArea.appendChild(article);

        index++;
        }
    };
}
