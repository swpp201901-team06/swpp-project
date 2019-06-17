import { takeEvery, take, put, fork } from 'redux-saga/effects'
import * as actions from './actions'
import { requestSignIn } from '../SignInPage/actions'
import { SIGN_IN_SUCCESS } from '../SignInPage/actionTypes'
import { callUrl } from '../sagas'

const backendUrl = 'http://localhost:8000'
const signUpUrl = `${backendUrl}/account/registration`
const dcUrl = `${backendUrl}/user/exists`
const archiveUrl = `${backendUrl}/archive/list`
const phoneUrl = `${backendUrl}/accounts/message/send/`
const phoneSaveUrl = `${backendUrl}/accounts/message/save`

export function* submit({ email, pw, confirmpw, nickname }) {
  try {
    console.log(email)
    console.log(pw)
    console.log(confirmpw)
    console.log(nickname)
    const response=yield callUrl('POST', signUpUrl, {
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
    console.log(response)
    if (response.exist === 'true') {
      yield put(actions.duplicateFound(key))
    } else if (response.exist === 'false') {
      yield put(actions.noDuplicateFound(key))
    }
  } catch (err) {
    console.log(err)
    yield put(actions.noDuplicateFound(key))
  }
}

export function* phoneAuthentication({ number }) {
  try {
    const response = yield callURL('GET', `${phoneUrl}number`)
    if(response == 'exist'){
      actions.phoneDuplicate()
    }
    else {
      yield put(actions.phoneSent(response))
    }
  } catch(e) {
    console.log(e)
    actions.phoneFail()
  }
}

export function* phoneAuthenticate({ input, code, phoneNumber }) {
  try {
    if (input == code){
      yield callUrl('POST', phoneSaveUrl, phoneNumber)
      yield put(actions.phoneAuthSuccess)
    }
    else {
      yield put(actions.phoneAuthFailed)
    }
  } catch(e) {
    console.log(e)
    actions.phoneFail()
  }
}


export function* watchDCRequest() {
  yield takeEvery(actions.DUPLICATE_CHECK_REQUEST, duplicateCheck)
}

export function* watchPhoneRequest() {
  yield takeEvery(actions.PHONE_REQUEST, phoneAuthentication)
}

export function* watchPhoneAuthRequest() {
  yield takeEvery(actions.PHONE_AUTH_REQUEST, phoneAuthenticate)
}

export default function* () {
  yield fork(watchSubmitRequest)
  yield fork(watchDCRequest)
  yield fork(watchPhoneRequest)
  yield fork(watchPhoneSaveRequest)
}
