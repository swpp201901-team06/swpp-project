import { takeEvery, take, put, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { callUrl } from '../sagas'
import * as actions from './actions'

export function* watchGotoArchiveButton() {
  while (true) {
    const { nickname } = yield take(actions.GOTO_ARCHIVE_BUTTON)
    const archiveLink = `/${nickname}/archive/`
    yield put(push(archiveLink))
    window.location.reload()
  }
}

export default function* () {
  yield fork(watchGotoArchiveButton)
}
