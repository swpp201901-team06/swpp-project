import { takeEvery, take, put, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { callUrl } from '../sagas'
import * as actions from './actions'

const backendUrl = 'http://127.0.0.1:8000/'
const myReviewListUrl = `${backendUrl}FooDa/myreviewlist/`
const reviewDetailUrl = `${backendUrl}FooDa/reviewdetail/`

export function* getReviewList({ archiveOwnerNickname }) {
  try {
    console.log('getReviewList')
    const response = yield callUrl('GET', `${myReviewListUrl}${archiveOwnerNickname}/`)
    const reviewList = yield response.json();
    // TODO: make sure reviewList is in the right format
    yield put(actions.getReviewListSuccess(reviewList))
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
    console.log('requesting review detail')
    const response = yield callUrl('GET', `${reviewDetailUrl}${reviewId}/`)
    console.log('response')
    console.log(response)
    const reviewDetail = yield response.json()
    console.log('review detail')
    console.log(reviewDetail)
    // TODO: make sure reviewDetail is in the right format
    yield put(actions.getReviewDetailSuccess(reviewDetail))
  } catch (err) {
    yield put(actions.getReviewDetailFailed())
  }
}

export function* watchGetReviewDetailRequest() {
  yield takeEvery(actions.GET_REVIEW_DETAIL_REQUEST, getReviewDetail)
}

export function* updateSortMethod({ archiveOwnerNickname, sortMethod }) {
  try {
    const response = yield callUrl('GET', `${myReviewListUrl}${archiveOwnerNickname}/${sortMethod}/`)
    const reviewList = yield response.json()
    // TODO: make sure reviewList is in the right format
    yield put(actions.updateSortMethodSuccess(reviewList, sortMethod))
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
    const reviewList = yield response.json()
    yield put(actions.deleteReviewSuccess(reviewList))
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
