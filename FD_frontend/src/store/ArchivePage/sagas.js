import { takeEvery, take, put, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { callUrl } from '../sagas'
import * as actions from './actions'

const backendUrl = 'http://127.0.0.1:8000/'
const myReviewListUrl = `${backendUrl}Review/list/`
const reviewDetailUrl = `${backendUrl}Review/detail/`

export function* getReviewList({ archiveOwnerNickname }) {
  try {
    console.log('getReviewList saga')
    console.log(archiveOwnerNickname)
    const response = yield callUrl('GET', `${myReviewListUrl}${archiveOwnerNickname}/`)
    console.log('getReviewList after callUrl')
    console.log(response)
    /*
    if (response.status === 404) {
      console.log('getReviewList if response.status === 404')
      yield put(actions.getReviewListFailed())
    }
    */
    yield put(actions.getReviewListSuccess(response))
  } catch (err) {
    console.log(err)
    yield put(actions.getReviewListFailed())
  }
}

export function* watchGetReviewListRequest() {
  yield takeEvery(actions.GET_REVIEW_LIST_REQUEST, getReviewList)
}

export function* getReviewDetail({ reviewId }) {
  try {
    console.log('getReviewDetail saga begin')
    console.log(reviewId)
    const response = yield callUrl('GET', `${reviewDetailUrl}${reviewId}/`)
    console.log('getReviewDetail saga response')
    console.log(response)
    yield put(actions.getReviewDetailSuccess(response))
  } catch (err) {
    console.log('getReviewDetail saga error')
    console.log(err)
    yield put(actions.getReviewDetailFailed())
  }
}

export function* watchGetReviewDetailRequest() {
  yield takeEvery(actions.GET_REVIEW_DETAIL_REQUEST, getReviewDetail)
}

export function* updateSortMethod({ archiveOwnerNickname, sortMethod }) {
  try {
    const response = yield callUrl(
      'GET',
      `${myReviewListUrl}${archiveOwnerNickname}/${sortMethod}/`
    )
    yield put(actions.updateSortMethodSuccess(response, sortMethod))
  } catch (err) {
    console.log(err)
    yield put(actions.updateSortMethodFailed())
  }
}

export function* watchUpdateSortMethodRequest() {
  yield takeEvery(actions.UPDATE_SORT_METHOD_REQUEST, updateSortMethod)
}

export function* deleteReview({ reviewId, archiveOwnerNickname }) {
  try {
    yield callUrl('DELETE', `${reviewDetailUrl}${reviewId}/`)
    // TODO: archiveOwnerNickname undefined
    const response = yield callUrl('GET', `${myReviewListUrl}${archiveOwnerNickname}/`)
    yield put(actions.deleteReviewSuccess(response))
  } catch (err) {
    console.log(err)
    yield put(actions.deleteReviewFailed())
  }
}

export function* watchDeleteReviewRequest() {
  yield takeEvery(actions.DELETE_REVIEW_REQUEST, deleteReview)
}

export function* watchGotoGuestLog() {
  while (true) {
    const { archiveOwnerNickname } = yield take(actions.GOTO_GUEST_LOG)
    const guestLogLink = `/${archiveOwnerNickname}/archive/guestlog` // TODO: fill in with correct link
    yield put(push(guestLogLink))
  }
}

export default function* () {
  yield fork(watchGetReviewListRequest)
  yield fork(watchGetReviewDetailRequest)
  yield fork(watchUpdateSortMethodRequest)
  yield fork(watchDeleteReviewRequest)
  yield fork(watchGotoGuestLog)
}
