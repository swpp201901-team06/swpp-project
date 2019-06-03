import { takeEvery, take, put, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { callUrl } from '../sagas'
import * as actions from './actions'

const backendUrl = 'http://127.0.0.1:8000/'
const usernameUrl = `${backendUrl}review/search/`
const tagUrl = `${backendUrl}tag/filter/`

export function * getResults({ key, value }) {
  try {
    let response
    if(key == 'author') {
      response = yield callUrl('GET', `${usernameUrl}${value}`)
    }
    else {
      response = yield callUrl('GET', `${tagUrl}${value}`)
    }
    yield put(actions.getResultsSuccess(response))
  }
  catch(err){
    console.log(err)
    yield put(actions.getResultsFailed())
  }
}

export function* watchGetResultsRequest() {
  yield takeEvery(actions.GET_RESULTS_REQUEST, getResults)
}

export default function* () {
  yield fork(watchGetResultsRequest)
}
