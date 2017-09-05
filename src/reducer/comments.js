import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'

const defaultComments = normalizedComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
}), {})

export default (comments = defaultComments, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case ADD_COMMENT:
            return {
                ...comments, [action.payload.id]: {
                    id: action.payload.id,
                    user: action.payload.user,
                    text: action.payload.text
                }
            }
    }

    return comments
}