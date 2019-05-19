import { takeEvery, take, put, call, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from 'services/api'
import * as actions from './actions'

const reviewDetailUrls = '/'

export function* getReviewList({ archiveOwnerNickname }) {
  try {
    // TODO
  } catch (err) {
    console.log(err)
  }
}

export function* watchGetReviewListRequest() {
  yield takeEvery(actions.GET_REVIEW_LIST_REQUEST, getReviewList)
}

export function* getReviewDetail({ reviewId }) {
  try {
    // TODO
    // const response = yield call(api.post, reviewDetailUrl, {id: id})
  } catch (err) {
    console.log(err)
  }
}

export function* watchGetReviewDetailRequest() {
  yield takeEvery(actions.GET_REVIEW_DETAIL_REQUEST, getReviewDetail)
}

export function* updateSortMethod({ sortMethod }) {
  try {
    // TODO
  } catch (err) {
    console.log(err)
  }
}

export function* watchUpdateSortMethodRequest() {
  yield takeEvery(actions.UPDATE_SORT_METHOD_REQUEST, updateSortMethod)
}

export function* deleteReview({ sortMethod, reviewId }) {
  try {
    // TODO
    // const response = yield call(api.delete, reviewDetailUrl, {id: id})
  } catch (err) {
    console.log(err)
  }
}

export function* watchDeleteReviewRequest() {
  yield takeEvery(actions.DELETE_REVIEW_REQUEST, deleteReview)
}

export function* watchGotoEditReview() {
  while (true) {
    const { reviewId } = yield take(actions.GOTO_EDIT_REVIEW)
    const editReviewLink = '/' // TODO: fill in with correct link
    yield put(push(editReviewLink))
  }
}

export function* watchGotoPostReview() {
  while (true) {
    yield take(actions.GOTO_POST_REVIEW)
    const postReviewLink = '/' // TODO: fill in with correct link
    yield put(push(postReviewLink))
  }
}

export function* watchGotoGuestLog() {
  while (true) {
    yield take(actions.GOTO_GUEST_LOG)
    const guestLogLink = '/' // TODO: fill in with correct link
    yield put(push(guestLogLink))
  }
}

export default function* () {
  yield fork(watchGetReviewListRequest)
  yield fork(watchGetReviewDetailRequest)
  yield fork(watchUpdateSortMethodRequest)
  yield fork(watchDeleteReviewRequest)
  yield fork(watchGotoEditReview)
  yield fork(watchGotoPostReview)
  yield fork(watchGotoGuestLog)
}
