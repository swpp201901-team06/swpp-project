import { takeEvery, take, put, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import * as actions from '../actions'
import * as actionTypes from './actionTypes'
import { baseHistory } from '../../index'
import { callUrl } from '../sagas'

const backendUrl = 'http://localhost:8000/'
const checkIdPath =  `${backendUrl}user/exists/email`
const signInPath = `${backendUrl}account/login/`
const getNicknamePath = `${backendUrl}user/username`

export function* signInAsync({ email, password }) {
  try {
    const checkIdResponse = yield callUrl('GET', `${checkIdPath}/${email}`)
    console.log('signInAsync saga')
    console.log(checkIdResponse)
    if (!checkIdResponse.exist) {
      throw Error('No matching email found.')
    }
    const userId = checkIdResponse.id
    const data = {
      username: 'test_username',
      email,
      password,
    }
    const response = yield callUrl('POST', signInPath, data)
    const nicknameResponse = yield callUrl('GET', `${getNicknamePath}/${email}`)
    localStorage.setItem('token', JSON.stringify(response.key))
    localStorage.setItem('email', JSON.stringify(email))
    localStorage.setItem('password', JSON.stringify(password))
    localStorage.setItem('nickname', JSON.stringify(nicknameResponse.username))
    localStorage.setItem('id', JSON.stringify(userId))
    yield put(actions.signInSuccess(response.key, email, password, nicknameResponse.username))
    yield put(push(`/${nicknameResponse.username}/archive`))
  } catch (e) {
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
