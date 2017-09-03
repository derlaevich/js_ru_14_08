import React, { Component } from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion decorator
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }

    render() {
        const { openItemId, toggleOpenItem, articles, filter } = this.props
        const articleElements = articles.filter(function (article) {
            return (filter.ids && filter.ids.length > 0 ? filter.ids.includes(article.id) : true) &&
                (filter.dateRange.from ? Date.parse(article.date) >= filter.dateRange.from.getTime() : true) &&
                (filter.dateRange.to ? Date.parse(article.date) <= filter.dateRange.to.getTime() : true)
        }).map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === openItemId}
                    toggleOpen={toggleOpenItem(article.id)}
                />
            </li>
        ))

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default connect(state => ({
    articles: state.articles,
    defaultOpenId: state.articles[0].id,
    filter: state.filter,
}))(accordion(ArticleList))