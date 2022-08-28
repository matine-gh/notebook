import {success_post, fail_post, loading_post} from "../actions/actions.post";

export default function reducerPost(
    state =
        {errorMessage: "", isDone: false, note: {}}, action) {
    switch (action.type) {
        case 'fail_post':
            return {...state, errorMessage: action.errorMessage}
        case 'success_post':
            return {...state, isDone: true}
        case 'loading_post':
            return {...state, note: action.note}
        default:
            return state
    }
}