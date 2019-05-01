import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from './actions'

const signUpUrl = 'http://127.0.0.1:8000/api/accounts/signup'

export function* submit(email, pw, confirmpw, nickname) {
  console.log(email, pw, confirmpw, nickname)
  const data = yield call(api.post, signUpUrl, {contents: email, pw, confirmpw, nickname})
}

export function* watchSubmitRequest() {
  while(true) {
    const { email, pw, confirmpw, nickname } = yield take(action.SIGNUP_SUBMIT_REQUEST)
    yield call(submit, email, pw, confirmpw, nickname)
  }
}
