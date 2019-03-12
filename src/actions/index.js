export const openArticle = (article) => {
    return {
        type: "ARTICLE_OPENED",
        payload: article
    }
}