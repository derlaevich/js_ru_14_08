import React, { Component } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'
import PropTypes from 'prop-types'
import { loadCommentsByArticleId } from '../AC'
import { connect } from 'react-redux'
import Loader from './Loader'

class CommentList extends Component {
    static defaultProps = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.isLoaded && nextProps.isOpen && !this.props.isOpen) {
            const { article, loadComments } = nextProps;
            loadComments();
        }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return !nextState.commentCount && !this.props.loading;
    //   }

    // componentDidMount() {
    //     var { article, loadComments } = this.props;
    //     loadComments();
    // }

    render() {
        const { isOpen, toggleOpen } = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { article: { id, comments = [] }, isOpen, loading, isLoaded } = this.props
        if (!isOpen) return null
        if (loading) return <Loader />
        if (!isLoaded) return null
            
        const body = comments.length ? (
            <ul>
                {comments.map(id => <li key={id}><Comment id={id} /></li>)}
            </ul>
        ) : <h3>No comments yet</h3>

        return (
            <div>
                {body}
                <CommentForm articleId={id} />
            </div>
        )
    }
}

export default connect((state, ownProps) => {
    return {
        loading: state.comments.loading,
        isLoaded: state.comments.loaded[ownProps.article.id]
    }
}, (dispatch, ownProps) => ({
    loadComments: () => dispatch(loadCommentsByArticleId(ownProps.article.id))
}))(toggleOpen(CommentList))

//export default toggleOpen(CommentList)