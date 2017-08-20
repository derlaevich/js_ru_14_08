import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        }
    }

    render() {
        const commentCount = this.props.comments ? this.props.comments.length : 0;

        return (
            <div>
                <h4>
                    Комментарии ({commentCount})
                    &nbsp;{this.getToggleVisibleCommentsButton()}
                </h4>
                {this.getCommentElements()}
            </div>
        );
    }

    getToggleVisibleCommentsButton = () => {
        return this.articleHasComments() && <button onClick={this.toggleVisibleComments}>{this.state.isOpen ? 'скрыть' : 'показать'}</button>
    }

    getCommentElements() {
        const canShowComments = this.articleHasComments() && this.state.isOpen;
        if (!canShowComments)
            return null;

        const commentElements = this.props.comments.map(comment => <Comment id={comment.id} user={comment.user} text={comment.text}/>)
        return (
            <ul>
                {commentElements}
            </ul>)
    }

    toggleVisibleComments = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    articleHasComments = () => {
        return this.props.comments;
    }
}

export default CommentList;