import { takeEvery, take, put, fork } from 'redux-saga/effects'
import * as actions from './actions'
import { requestSignIn } from '../SignInPage/actions'
import { SIGN_IN_SUCCESS } from '../SignInPage/actionTypes'
import { callUrl } from '../sagas'

const backendUrl = 'http://localhost:8000'
const signUpUrl = `${backendUrl}/account/registration`
const dcUrl = `${backendUrl}/user/exists`
const archiveUrl = `${backendUrl}/archive/list`

export function* submit({ email, pw, confirmpw, nickname }) {
  try {
    yield callUrl('POST', signUpUrl, {
      email,
      password1: pw,
      password2: confirmpw,
      username: nickname,
    })
    yield put(requestSignIn(email, pw))
    yield take(SIGN_IN_SUCCESS)
    yield callUrl('POST', archiveUrl)
  } catch (err) {
    console.log(err)
  }
}

export function* watchSubmitRequest() {
  yield takeEvery(actions.SIGNUP_SUBMIT_REQUEST, submit)
}

export function* duplicateCheck({ key, value }) {
  try {
    const response = yield callUrl('GET', `${dcUrl}/${key}/${value}`)
    if (response === 'exist') {
      yield put(actions.duplicateFound(key))
    } else if (response === 'not exist') {
      yield put(actions.noDuplicateFound(key))
    }
  } catch (err) {
    console.log(err)
    yield put(actions.noDuplicateFound(key))
  }
}

export function* watchDCRequest() {
  yield takeEvery(actions.DUPLICATE_CHECK_REQUEST, duplicateCheck)
}

export default function* () {
  yield fork(watchSubmitRequest)
  yield fork(watchDCRequest)
}
