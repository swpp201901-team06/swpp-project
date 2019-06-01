import { takeEvery, take, put, fork } from 'redux-saga/effects'
import * as actions from './actions'
import { requestSignIn } from '../SignInPage/actions'
import { SIGN_IN_SUCCESS } from '../SignInPage/actionTypes'
import { callUrl } from '../sagas'

const signUpUrl = 'http://127.0.0.1:8000/Account/registration/'
const dcUrl = 'http://127.0.0.1:8000/User/exists/'
const archiveUrl = 'http://127.0.0.1:8000/Archive/list/'

export function* submit({ email, pw, confirmpw, nickname }) {
  console.log('submit saga')
  console.log({ email, pw, confirmpw, nickname })
  try {
    yield callUrl('POST', signUpUrl, {
      email,
      password1: pw,
      password2: confirmpw,
      username: nickname,
    })
    console.log('submit saga after callUrl')
    yield put(requestSignIn(email, pw))
    console.log('submit saga after requestSignIn')
    yield take(SIGN_IN_SUCCESS)
    console.log('submit saga after SIGN_IN_SUCCESS')
    console.log(JSON.parse(localStorage.getItem('token')))
    yield callUrl('POST', archiveUrl)
  } catch (err) {
    console.log(err)
  }
}

export function* watchSubmitRequest() {
  yield takeEvery(actions.SIGNUP_SUBMIT_REQUEST, submit)
}

export function* duplicateCheck({ key, value }) {
  console.log(key, value)
  try {
    console.log('sending DC request')
    const response = yield callUrl('GET', `${dcUrl}${key}/${value}`)
    console.log('duplicateCheck after callUrl response')
    console.log(response)
    if (response === 'exist') {
      console.log('already exists')
      yield put(actions.duplicateFound(key))
    } else if (response === 'not exist') {
      console.log('does not exist')
      yield put(actions.noDuplicateFound(key))
    }
  } catch (err) {
    console.log('free to use')
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
