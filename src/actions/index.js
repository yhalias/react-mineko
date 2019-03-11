export const openArticle = (article) => {
    alert(article.title);
    return {
        type: "ARTICLE_OPENED",
        payload: article
    }
}