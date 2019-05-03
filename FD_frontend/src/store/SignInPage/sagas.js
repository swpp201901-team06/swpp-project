import { takeEvery, all, take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from '../actions'

export function* signInAsync({email, password}) {
  try {
    // TODO
  } catch(e) {
    console.error(e)
  }
}

export function* watchRequestSignIn() {
  yield takeEvery(ACTIONTYPES.REQUEST_SIGN_IN, signInAsync)
}

export default function* () {
  yield fork(watchRequestSignIn)
}
