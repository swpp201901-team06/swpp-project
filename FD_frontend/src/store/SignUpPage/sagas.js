import { takeEvery, take, put, call, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from 'services/api'
import * as actions from './actions'

const signUpUrl = 'http://127.0.0.1:8000/api/rest-auth/registration/'
const dcUrl = 'http://127.0.0.1:8000/api/users/exists/'

export function* submit({email, pw, confirmpw, nickname}) {
  console.log(email, pw, confirmpw, nickname)
  try {
    const data = {
      email: email,
      pw: pw,
      confirmpw: confirmpw,
      nickname: nickname,
    }
    const response = yield call(api.post, signUpUrl, {email: email, password1: pw, password2: confirmpw, username: nickname})
    yield put(push('/'));
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
    console.log("checked!");
    yield put(actions.checkDataSuccess(data));

    if(response == "exist"){
    console.log("already exists");
    }
  }
  catch (err) {
    console.log("free to use");
    yield put(actions.checkDataFailure(err));
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
