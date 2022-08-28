import {success_get, fail_get, loading_get} from "../actions/actions.get";

export default function reducerGet(
    state =
        {errorMessage: "", isDone: false, notes: {}}, action) {
    switch (action.type) {
        case fail_get:
            return {...state, errorMessage: action.errorMessage}
        case success_get:
            return {...state, isDone: true, notes: action.notes}
        case loading_get:
            return {...state}
        default:
            return state
    }
}