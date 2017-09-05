import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { normalizedArticles } from '../fixtures'

const defaultArticles = normalizedArticles.reduce((acc, article) => ({
    ...acc,
    [article.id]: article
}), {})

export default (articles = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id !== payload.id);
        case ADD_COMMENT:
            let article = articles[action.payload.articleId];
            article = { ...article,  comments: [...article.comments, [action.payload.id]] };
            return { ...articles, [article.id]: article };
    }

    return articles
}