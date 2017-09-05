import { createSelector } from 'reselect'

export const articlesSelector = state => state.articles
export const filtersSelector = state => state.filters
export const idSelector = (state, props) => props.id
export const commentsSelector = state => state.comments

export const filtratedArticlesSelector = createSelector(articlesSelector, filtersSelector, (articles, filters) => {
    console.log('---', 'recomputing filtrated articles')
    const { selected, dateRange: { from, to } } = filters;

    return Object.keys(articles)
        .filter(id => {
            const article = articles[id];
            const published = Date.parse(article.date)
            return (!selected.length || selected.includes(article.id)) &&
                (!from || !to || (published > from && published < to))
        })
        .reduce((res, id) => (res[id] = articles[id], res), {});

    // return articles.filter(article => {
    //     const published = Date.parse(article.date)
    //     return (!selected.length || selected.includes(article.id)) &&
    //         (!from || !to || (published > from && published < to))
    // })
})

export const createCommentSelector = () => createSelector(commentsSelector, idSelector, (comments, id) => {
    return comments[id]
})

export const createArticleSelector = () => createSelector(articlesSelector, idSelector, (articles, id) => {
    return articles[id]
})