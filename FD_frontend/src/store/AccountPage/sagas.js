import { takeEvery, take, put, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { callUrl, callUrlImg } from '../sagas'
import * as actions from './actions'

const backendUrl = 'http://127.0.0.1:8000/'
const userUrl = `${backendUrl}user/detail/`
const pwChangeUrl = 'http://127.0.0.1:8000/account/password/change/'

export function* modifyAccount({ email, pw, confirmpw, nickname, publicStatus }) {
  try {
    const Id = JSON.parse(localStorage.getItem('id'))
    const response = yield callUrl('PUT', userUrl+Id, { username: nickname, email: email, publicStatus: publicStatus })
    
    if(response.ok){
      const password = JSON.parse(localStorage.getItem('password'))
      localStorage.setItem('email', JSON.stringify(email))
      localStorage.setItem('nickname', JSON.stringify(nicknameResponse.username))
      const response2 = yield callUrl('POST', pwChangeUrl, { new_password1: pw, new_password2: confirmpw, old_password: password })
      if(response2.ok){
        localStorage.setItem('password', JSON.stringify(password))
        yield put(push(`/${nickname}/archive`))
      }
    }
  } catch(e) {
    console.error(e)
  }
}

export function* getAccount() {
  try {
    const Id = JSON.parse(localStorage.getItem('id'))
    const response = yield callUrl('GET', userUrl+Id)
    if(response.ok){
      console.log('response is ok')
      const password = JSON.parse(localStorage.getItem('password'))
      console.log(password)
      const { username, email, publicStatus } = response
      yield put(actions.getAccountSuccess( username, email, password, publicStatus))
    }
  } catch(e) {
    console.error(e)
  }
}


export function* watchModifyAccountRequest() {
  yield takeEvery(actions.EDIT_ACCOUNT_REQUEST, modifyAccount)
}

export function* watchGetAccountRequest() {
  yield takeEvery(actions.GET_ACCOUNT_REQUEST, getAccount)
}

export default function* () {
  yield fork(watchModifyAccountRequest)
  yield fork(watchGetAccountRequest)
}
