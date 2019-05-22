import { takeEvery, take, put, call, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from 'services/api'
import * as actions from '../actions'
import * as actionTypes from './actionTypes'
import { baseHistory } from '../../index'

const signInPath = 'http://127.0.0.1:8000/api/rest-auth/login/'
const getNicknamePath = 'http://127.0.0.1:8000/api/users/get-nickname/'

export function* signInAsync({ email, password }) {
  try {
    const data = {
      username: 'test_username',
      email,
      password,
    }
    const response = yield call(api.post, signInPath, data)
    const nicknameResponse = yield call(api.get, getNicknamePath + email)
    console.log('signInAsync before signInSuccess')
    console.log(nicknameResponse)
    localStorage.setItem('token', JSON.stringify(response.key))
    localStorage.setItem('email', JSON.stringify(email))
    localStorage.setItem('password', JSON.stringify(password))
    localStorage.setItem('nickname', JSON.stringify(nicknameResponse.username))
    yield put(actions.signInSuccess(response.key, email, password, nicknameResponse.username))
    console.log('signInAsync after signInSuccess')
    yield put(push('/' + nicknameResponse.username + '/archive'))
  } catch (e) {
    console.log('signInAsync error')
    console.error(e)
    yield put(actions.signInFailed())
  }
}

export function* watchRequestSignIn() {
  yield takeEvery(actionTypes.REQUEST_SIGN_IN, signInAsync)
}

export function* watchGotoSignUp() {
  while (true) {
    yield take(actionTypes.GOTO_SIGN_UP)
    console.log('store/SignInPage/sagas watchGotoSignUp')
    baseHistory.push('/signup')
  }
}

export function* watchGotoArchive() {
  while (true) {
    const { nickname } = yield take(actionTypes.GOTO_ARCHIVE)
    yield put(push('/' + nickname + '/archive'))
  }
}

export default function* () {
  yield fork(watchRequestSignIn)
  yield fork(watchGotoSignUp)
  yield fork(watchGotoArchive)
}
