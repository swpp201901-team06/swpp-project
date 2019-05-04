import { takeEvery, all, take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from '../actions'
import * as ACTIONTYPES from './actionTypes'
import {baseHistory} from '../../index'

const signInPath = "http://127.0.0.1:8000/api/rest-auth/login/"

export function* signInAsync({email, password}) {
  console.log('store/SignInPage/sagas signInAsync 1')
  console.log(email)
  console.log(password)
  console.log('store/SignInPage/sagas signInAsync 2')
  try {
    console.log('store/SignInPage/sagas signInAsync 3')
    const data = {
      username: "test_username",
      email: email,
      password: password,
    }
    console.log('store/SignInPage/sagas signInAsync 4')
    console.log(data)
    console.log('store/SignInPage/sagas signInAsync 5')
    const response = yield call(api.post, signInPath, data)
    console.log('store/SignInPage/sagas signInAsync 6')
    console.log(response)
    console.log(response.key)
    console.log('store/SignInPage/sagas signInAsync 7')
    // TODO: push archive page link to baseHistory
    // baseHistory.push(link)
    yield put(actions.signInSuccess(response.key, email))
    console.log('store/SignInPage/sagas signInAsync 8')
  } catch(e) {
    console.log('store/SignInPage/sagas signInAsync 9')
    console.log(e)
    console.log('store/SignInPage/sagas signInAsync 10')
    console.error(e)
    console.log('store/SignInPage/sagas signInAsync 11')
    yield put(actions.signInFailed())
    console.log('store/SignInPage/sagas signInAsync 12')
  }
}

export function* watchRequestSignIn() {
  console.log('store/SignInPage/sagas watchRequestSignIn 1')
  yield takeEvery(ACTIONTYPES.REQUEST_SIGN_IN, signInAsync)
  console.log('store/SignInPage/sagas watchRequestSignIn 2')
}

export default function* () {
  console.log('store/SignInPage/sagas 1')
  yield fork(watchRequestSignIn)
  console.log('store/SignInPage/sagas 2')
}
