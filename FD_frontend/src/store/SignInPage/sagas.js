import { takeEvery, take, put, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import * as actions from '../actions'
import * as actionTypes from './actionTypes'
import { baseHistory } from '../../index'
import { callUrl } from '../sagas'

const signInPath = 'http://127.0.0.1:8000/account/login'
const getNicknamePath = 'http://127.0.0.1:8000/user/username/'

export function* signInAsync({ email, password }) {
  try {
    const data = {
      username: 'test_username',
      email,
      password,
    }
    const response = yield callUrl('POST', signInPath, data)
    const nicknameResponse = yield callUrl('GET', `${getNicknamePath}${email}`)
    localStorage.setItem('token', JSON.stringify(response.key))
    localStorage.setItem('email', JSON.stringify(email))
    localStorage.setItem('password', JSON.stringify(password))
    localStorage.setItem('nickname', JSON.stringify(nicknameResponse.username))
    yield put(actions.signInSuccess(response.key, email, password, nicknameResponse.username))
    yield put(push(`/${nicknameResponse.username}/archive`))
  } catch (e) {
    console.error(e)
    yield put(actions.signInFailed())
    throw e
  }
}

export function* watchRequestSignIn() {
  yield takeEvery(actionTypes.REQUEST_SIGN_IN, signInAsync)
}

export function* watchGotoSignUp() {
  while (true) {
    yield take(actionTypes.GOTO_SIGN_UP)
    baseHistory.push('/signup')
  }
}

export function* watchGotoArchive() {
  while (true) {
    const { nickname } = yield take(actionTypes.GOTO_ARCHIVE)
    yield put(push(`/${nickname}/archive`))
  }
}

export default function* () {
  yield fork(watchRequestSignIn)
  yield fork(watchGotoSignUp)
  yield fork(watchGotoArchive)
}
