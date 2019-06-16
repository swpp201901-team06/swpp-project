import { take, fork } from 'redux-saga/effects'
import { baseHistory } from '../../index'
import * as actions from './actions'

export function* watchGoToSignin() {
  while (true) {
    yield take(actions.GOTO_SIGN_IN)
    baseHistory.push('/signin')
  }
}

export function* watchGoToGuest() {
  while (true) {
    yield take(actions.GOTO_GUEST)
    baseHistory.push('/guest')
  }
}

export default function* () {
  yield fork(watchGoToSignin)
  yield fork(watchGoToGuest)
}