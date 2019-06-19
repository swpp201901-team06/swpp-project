import { takeEvery, take, put, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import * as actions from '../actions'
import * as actionTypes from './actionTypes'
import { baseHistory } from '../../index'
import { callUrl } from '../sagas'

const backendUrl = 'http://3.13.219.185:8000'
const checkIdUrl = `${backendUrl}/user/exists/email`
const signInUrl = `${backendUrl}/account/login/`
const getNicknameUrl = `${backendUrl}/user/username`

export function* signInSaga({ email, password }) {
  try {
    // check and get ID of user with `email`
    const checkIdResponse = yield callUrl('GET', `${checkIdUrl}/${email}`)
    if (checkIdResponse.exist === 'false') {
      throw Error('No matching email found.')
    }
    const userId = checkIdResponse.id

    const data = {
      username: 'test_username',
      email,
      password,
    }
    // sign in request
    const response = yield callUrl('POST', signInUrl, data)
    // check nickname corresponding to `email`
    const nicknameResponse = yield callUrl('GET', `${getNicknameUrl}/${email}`)

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
  yield takeEvery(actionTypes.REQUEST_SIGN_IN, signInSaga)
}

export function* watchGotoSignUp() {
  while (true) {
    yield take(actionTypes.GOTO_SIGN_UP)
    // redirect to `/signup`
    baseHistory.push('/signup')
  }
}

export function* watchGotoArchive() {
  while (true) {
    const { nickname } = yield take(actionTypes.GOTO_ARCHIVE)
    // redirect to archive page
    yield put(push(`/${nickname}/archive`))
  }
}

export default function* () {
  yield fork(watchRequestSignIn)
  yield fork(watchGotoSignUp)
  yield fork(watchGotoArchive)
}
