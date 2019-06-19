import { takeEvery, take, put, fork } from 'redux-saga/effects'
import * as actions from './actions'
import { requestSignIn } from '../SignInPage/actions'
import { SIGN_IN_SUCCESS } from '../SignInPage/actionTypes'
import { callUrl } from '../sagas'

const backendUrl = 'http://3.13.219.185:8000'
const signUpUrl = `${backendUrl}/account/registration`
const dcUrl = `${backendUrl}/user/exists`
const archiveUrl = `${backendUrl}/archive/list`
const phoneUrl = `${backendUrl}/account/message/send/`
const phoneSaveUrl = `${backendUrl}/account/message/save`

export function* submit({ email, pw, confirmpw, nickname, phoneNumber }) {
  try {
    if(phoneNumber != ''){
      const response=yield callUrl('POST', signUpUrl, {
        email,
        password1: pw,
        password2: confirmpw,
        username: nickname,
      })
      console.log(response)
      yield callUrl('POST', phoneSaveUrl, {number: phoneNumber})
      yield put(requestSignIn(email, pw))
      yield take(SIGN_IN_SUCCESS)
      yield callUrl('POST', archiveUrl)
    }
    else {
      yield put(actions.mustPhoneAuth())
    }
  } catch (err) {
    console.log(err)
    yield put(actions.signUpFailed())
  }
}

export function* watchSubmitRequest() {
  yield takeEvery(actions.SIGNUP_SUBMIT_REQUEST, submit)
}

export function* duplicateCheck({ key, value }) {
  try {
    const response = yield callUrl('GET', `${dcUrl}/${key}/${value}`)
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
    const response = yield callUrl('GET', `${phoneUrl}${number}`)
    if(response == 'exist'){
      yield put(actions.phoneDuplicate())
    }
    else {
      console.log(response)
      yield put(actions.phoneSent(response))
    }
  } catch(e) {
    console.log(e)
    yield put(actions.phoneFail())
  }
}

export function* phoneAuthenticate({ input, code, phoneNumber }) {
  try {
    if (input == code){
      yield put(actions.phoneAuthSuccess(phoneNumber))
    }
    else {
      yield put(actions.phoneAuthFailed())
    }
  } catch(e) {
    console.log(e)
    yield put(actions.phoneAuthFailed())
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
  yield fork(watchPhoneAuthRequest)
}
