import { take, put, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import * as actions from './actions'

export function* watchGotoArchiveButton() {
  while (true) {
    const { nickname } = yield take(actions.GOTO_ARCHIVE_BUTTON)
    const archiveLink = `/${nickname}/archive/`
    yield put(push(archiveLink))
    window.location.reload()
  }
}

export function* watchLogOutButton() {
  while (true) {
    yield take(actions.LOGOUT)
    yield put(push('/'))
  }
}

export default function* () {
  yield fork(watchGotoArchiveButton)
  yield fork(watchLogOutButton)
}
