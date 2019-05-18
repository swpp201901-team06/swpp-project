import { take, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import { baseHistory } from '../../index'

export function* watchGoToSignin() {
  while (true) {
    yield take('GO_TO_SIGNIN')
    console.log('store/MainPage/sagas watchGoToSignin')
    baseHistory.push('/signin')
  }
}

export function* watchGoToGuest() {
  while (true) {
    yield take('GO_TO_GUEST')
    console.log('store/MainPage/sagas watchGoToGuest')
    baseHistory.push('/guest')
  }
}

export default function* () {
  yield fork(watchGoToSignin)
  yield fork(watchGoToGuest)
}