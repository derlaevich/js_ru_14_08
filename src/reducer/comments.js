import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, START, SUCCESS } from '../constants'
import { normalizedComments } from '../fixtures'
import { arrToMap } from './utils'
import { Map, Record } from 'immutable'

const CommentRecord = Record({
    id: null,
    user: null,
    text: null
});

const ReducerRecord = Record({
    entities: arrToMap([], CommentRecord),
    loading: false,
    loaded: {}
});

const defaultState = new ReducerRecord();

export default (state = defaultState, action) => {
    const { type, payload, response, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.set('entities', state.get('entities').set(randomId, CommentRecord({
                id: randomId,
                user: payload.comment.user,
                text: payload.comment.text
            })));
        case LOAD_ARTICLE_COMMENTS + START:
            return state.set('loading', true)
        case LOAD_ARTICLE_COMMENTS + SUCCESS: {

            return state
                .set('entities', arrToMap(response.records, CommentRecord))
                .set('loading', false)
                .set('loaded', { ...state.get('loaded'), [payload.id]: true })
        }
    }
    return state
}