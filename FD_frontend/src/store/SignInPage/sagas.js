import { takeEvery, all, take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from '../actions'
import * as ACTIONTYPES from './actionTypes'
import {baseHistory} from '../../index'

const signInPath = 'http://127.0.0.1:8000/api/rest-auth/login/'
const getNicknamePath = 'http://127.0.0.1:8000/api/users/get-nickname/'

export function* signInAsync({email, password}) {
  try {
    const data = {
      username: "test_username",
      email: email,
      password: password,
    }
    const response = yield call(api.post, signInPath, data)
    const nicknameResponse = yield call(api.get, getNicknamePath + email)
    baseHistory.push('/' + nicknameResponse.username + '/archive')
    yield put(actions.signInSuccess(response.key, email, nicknameResponse.username))
  } catch(e) {
    console.error(e)
    yield put(actions.signInFailed())
  }
}

export function* watchRequestSignIn() {
  yield takeEvery(ACTIONTYPES.REQUEST_SIGN_IN, signInAsync)
}

export default function* () {
  yield fork(watchRequestSignIn)
}
