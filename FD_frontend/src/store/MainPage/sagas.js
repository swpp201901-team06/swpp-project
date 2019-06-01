import { take, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import { baseHistory } from '../../index'

export function* watchGoToSignin() {
  while (true) {
    yield take('GO_TO_SIGNIN')
    baseHistory.push('/signin')
  }
}

export function* watchGoToGuest() {
  while (true) {
    yield take('GO_TO_GUEST')
    baseHistory.push('/guest')
  }
}

export default function* () {
  yield fork(watchGoToSignin)
  yield fork(watchGoToGuest)
}