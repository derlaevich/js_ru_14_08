import { INCREMENT, DELETE_ARTICLE, SET_IDS_FILTER_ARTICLE_LIST, SET_DATE_FILTER_ARTICLE_LIST } from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function setIdsFilterArticleList(ids) {
    return {
        type: SET_IDS_FILTER_ARTICLE_LIST,
        payload: { ids }
    }
}

export function setDateFilterArticleList(dateRange) {
    return {
        type: SET_DATE_FILTER_ARTICLE_LIST,
        payload: { dateRange }
    }
}