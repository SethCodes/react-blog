export const updateUrl = (url) => {
    return {
        type: 'UPDATE_URL',
        url: url
    };
}

export const updateArticle = (article) => {
    return {
        type: 'UPDATE_ARTICLE',
        article: article
    }
}