import { takeEvery, take, put, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { callUrl } from '../sagas'
import * as actions from './actions'

export function* goToSearchPage({key, value}) {
  try {
    yield put(push("/search/"+key+"/"+value))
    window.location.reload()
    } catch(e) {
    console.error(e)
  }
}

export function* watchGoToSearchPage() {
  yield takeEvery(actions.SEARCH_REQUEST, goToSearchPage)
}

export default function* () {
  yield fork(watchGoToSearchPage)
}
