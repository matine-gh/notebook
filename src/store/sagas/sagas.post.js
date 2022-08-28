import {takeLatest, put, select} from 'redux-saga/effects';
import {loading_post, postFail, postSuccess} from "../actions/actions.post";
import axios from "axios";

const note = state =>state.post.note;
// console.log("saga note: ", note)

function* rootPostSaga() {
    const selectedNote = yield select(note)


    axios.post('http://localhost:3000/notes', {note: selectedNote})
        .then(res => console.log('res: ', res))
        .catch(err => console.log('err: ', err))
}

export default function* postSaga() {
    yield takeLatest(loading_post, rootPostSaga)
}