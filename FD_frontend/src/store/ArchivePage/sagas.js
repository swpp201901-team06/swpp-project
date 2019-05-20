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
    const reviewList = yield callUrl('GET', `${myReviewListUrl}${archiveOwnerNickname}/`)
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
    const reviewDetail = yield callUrl('GET', `${reviewDetailUrl}${reviewId}/`)
    yield put(actions.getReviewDetailSuccess(reviewDetail))
  } catch (err) {
    console.log(err)
    yield put(actions.getReviewDetailFailed())
  }
}

export function* watchGetReviewDetailRequest() {
  yield takeEvery(actions.GET_REVIEW_DETAIL_REQUEST, getReviewDetail)
}

export function* updateSortMethod({ archiveOwnerNickname, sortMethod }) {
  try {
    const reviewList = yield callUrl('GET', `${myReviewListUrl}${archiveOwnerNickname}/${sortMethod}/`)
    yield put(actions.updateSortMethodSuccess(reviewList, sortMethod))
  } catch (err) {
    console.log(err)
    yield put(actions.updateSortMethodFailed())
  }
}

export function* watchUpdateSortMethodRequest() {
  yield takeEvery(actions.UPDATE_SORT_METHOD_REQUEST, updateSortMethod)
}

export function* deleteReview({ reviewId }) {
  try {
    yield callUrl('DELETE', `${reviewDetailUrl}${reviewId}/`)
    const reviewList = yield callUrl('GET', `${myReviewListUrl}${archiveOwnerNickname}/`)
    yield put(actions.deleteReviewSuccess(reviewList))
  } catch (err) {
    console.log(err)
    yield put(actions.deleteReviewFailed())
  }
}

export function* watchDeleteReviewRequest() {
  yield takeEvery(actions.DELETE_REVIEW_REQUEST, deleteReview)
}
/*
export function* watchGotoEditReview() {
  while (true) {
    const { reviewId } = yield take(actions.GOTO_EDIT_REVIEW)
    const editReviewLink = `/post/${reviewId}`
    yield put(push(editReviewLink))
  }
}
*/

export function* watchGotoPostReview() {
  while (true) {
    yield take(actions.GOTO_POST_REVIEW)
    const postReviewLink = '/post'
    yield put(push(postReviewLink))
  }
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
  // yield fork(watchGotoEditReview)
  yield fork(watchGotoPostReview)
  yield fork(watchGotoGuestLog)
}
