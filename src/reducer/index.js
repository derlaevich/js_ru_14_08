import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import filter from './filter.js'

export default combineReducers({
    counter: counterReducer,
    articles,
    filter
})