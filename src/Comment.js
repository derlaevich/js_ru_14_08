import React from 'react'

function Comment(props) {
    const { id, user, text } = props;
    return <li key={id}><b>{user}</b><p>{text}</p></li>
}

export default Comment;