import { takeEvery, take, put, call, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from 'services/api'
import * as actions from './actions'
import { requestSignIn } from '../SignInPage/actions'
import { SIGN_IN_SUCCESS } from '../SignInPage/actionTypes'

const signUpUrl = 'http://127.0.0.1:8000/api/rest-auth/registration/'
const dcUrl = 'http://127.0.0.1:8000/api/users/exists/'
const archiveUrl = 'http://127.0.0.1:8000/FooDa/archivelist/'
const archiveInstance = api.create()

export function* submit({ email, pw, confirmpw, nickname }) {
  console.log(email, pw, confirmpw, nickname)
  try {
    const response = yield call(api.post, signUpUrl, {email: email, password1: pw, password2: confirmpw, username: nickname})
    yield put(requestSignIn(email, pw))
    yield take(SIGN_IN_SUCCESS)
    console.log("post call to archivelist")
    archiveInstance.setToken(JSON.parse(localStorage.getItem('token')))
    console.log(archiveInstance)
    console.log(JSON.parse(localStorage.getItem('token')))
    // const response2 = yield call([archiveInstance, archiveInstance.post], archiveUrl)
    const credentials = new Buffer(`${email}:${pw}`).toString('base64')
    const response2 = yield call(
      fetch,
      archiveUrl,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${credentials}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        }),
      }
    )
    console.log(response2)
  }
  catch(err) {
    console.log(err);
  }
}

export function* watchSubmitRequest() {
  yield takeEvery(actions.SIGNUP_SUBMIT_REQUEST, submit);
}

export function* duplicateCheck({ key, value }) {
  console.log(key, value);
  try {
      const data = {
        key: key,
        value: value,
    }
    console.log("sending DC request");
    const response = yield call(api.get, dcUrl+key+'/'+value);

    if(response == "exist"){
      console.log("already exists");
      yield put(actions.duplicateFound(key));
      return;
    }
    else if(response == "not exist"){
      console.log("does not exist");
      yield put(actions.noDuplicateFound(key));
      return;
    }
  }
  catch (err) {
    console.log("free to use");
    /*yield put(actions.checkDataFailure(err));*/
    yield put(actions.noDuplicateFound(key));
    return;
  }
}

export function* watchDCRequest() {
  yield takeEvery(actions.DUPLICATE_CHECK_REQUEST, duplicateCheck);
}

export default function* () {
  yield fork(watchSubmitRequest);
  yield fork(watchDCRequest);
}
