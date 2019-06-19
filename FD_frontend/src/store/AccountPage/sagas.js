import { takeEvery, take, put, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { callUrl, callUrlImg } from '../sagas'
import * as actions from './actions'

const backendUrl = 'http://127.0.0.1:8000/'
const userUrl = `${backendUrl}user/detail/`
const pwChangeUrl = 'http://127.0.0.1:8000/account/password/change/'

export function* modifyAccountInfo({ nickname, publicStatus }) {
  try {
    const Id = JSON.parse(localStorage.getItem('id'))
    const response = yield callUrl('PUT', userUrl+Id, { username: nickname, public_status: publicStatus })
    localStorage.setItem('nickname', JSON.stringify(nickname))
    yield put(push(`/${nickname}/account`))
    window.location.reload()
  } catch(e) {
    console.error(e)
  }
}

export function* modifyPassword({ pw, confirmpw }) {
  try {
    const Id = JSON.parse(localStorage.getItem('id'))
      const password = JSON.parse(localStorage.getItem('password'))
      const response = yield callUrl('POST', pwChangeUrl, { new_password1: pw, new_password2: confirmpw, old_password: password })
      localStorage.setItem('password', JSON.stringify(pw))
  } catch(e) {
    console.error(e)
  }
}

export function* getAccount() {
  try {
    const Id = JSON.parse(localStorage.getItem('id'))
    const response = yield callUrl('GET', userUrl+Id)
    const password = JSON.parse(localStorage.getItem('password'))
    const { username, public_status } = response
    console.log(public_status)
    yield put(actions.getAccountSuccess( username, password, public_status))
  } catch(e) {
    console.error(e)
  }
}


export function* watchModifyAccountInfoRequest() {
  yield takeEvery(actions.MODIFY_ACCOUNT_INFO_REQUEST, modifyAccountInfo)
}

export function* watchModifyPasswordRequest() {
  yield takeEvery(actions.MODIFY_PASSWORD_REQUEST, modifyPassword)
}

export function* watchGetAccountRequest() {
  yield takeEvery(actions.GET_ACCOUNT_REQUEST, getAccount)
}

export default function* () {
  yield fork(watchModifyPasswordRequest)
  yield fork(watchModifyAccountInfoRequest)
  yield fork(watchGetAccountRequest)
}
