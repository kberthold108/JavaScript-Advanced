function getArticleGenerator(articles) {
    const output = document.getElementById("content");

    return function showNext() {
        if (articles.length === 0) {
            return;
        }
        const newArticle = document.createElement("article");
        newArticle.textContent = articles.shift();
        output.appendChild(newArticle);
    };
}
