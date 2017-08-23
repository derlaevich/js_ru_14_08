import React, { Component } from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'
import PropTypes from 'prop-types'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                title: PropTypes.string.isRequired,
                text: PropTypes.string,
                comments: PropTypes.arrayOf(PropTypes.shape({
                    id: PropTypes.string,
                    user: PropTypes.string,
                    text: PropTypes.string
                }))
            })).isRequired
    }

    render() {
        const { isOpenItem, toggleOpen } = this.props;

        const articleElements = this.props.articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={isOpenItem}
                    toggleOpen={toggleOpen}
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

export default accordion(ArticleList);
