import { SET_IDS_FILTER_ARTICLE_LIST, SET_DATE_FILTER_ARTICLE_LIST } from '../constants.js'

export default (filter = {
    ids: [],
    dateRange: {
        from: null,
        to: null
    }
}, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_IDS_FILTER_ARTICLE_LIST:
            return Object.assign({}, filter, payload);
            break;
        case SET_DATE_FILTER_ARTICLE_LIST:
            return Object.assign({}, filter, payload);
            break;
    }

    return filter;
}