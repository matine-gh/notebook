import {takeLatest, put, select} from 'redux-saga/effects';
import {loading_get, getFail, getSuccess} from "../actions/actions.get";
import axios from "axios";

const formData = state =>state.get.formData;


function* rootGetSaga() {
    const formDataSelected = yield select(formData)
        try{
            const response =yield axios.get('http://localhost:3000/notes')
            yield put (getSuccess(response.data))
        }
        catch(err) {console.log('eeeeeeeeeeerrrrrrrrrrr')}
}

export default function* getSaga() {
    yield takeLatest(loading_get, rootGetSaga)
}