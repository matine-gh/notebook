import {connectRouter} from "connected-react-router";
import {combineReducers} from "redux";
import reducerPost from './reducer.post'
import reducerGet from "./reducer.get";

export default (history) => combineReducers({
    router: connectRouter(history),
    get: reducerGet,
    post: reducerPost,
})