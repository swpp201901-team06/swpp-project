import { takeEvery, take, put, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { callUrl } from '../sagas'
import * as actions from './actions'

const backendUrl = 'http://127.0.0.1:8000/'
const myReviewListUrl = `${backendUrl}review/list/`
const reviewDetailUrl = `${backendUrl}review/detail/`

export function* getReviewList({ sortOption, archiveOwnerNickname }) {
  try {
    let response
    if(sortOption == 'default'){
      response = yield callUrl('GET', `${myReviewListUrl}${archiveOwnerNickname}/`)
    }
    else{
      response = yield callUrl('GET', `${myReviewListUrl}${archiveOwnerNickname}/${sortOption}`)
    } 
    console.log('getReviewList after callUrl')
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
<<<<<<< HEAD
    console.log('getReviewDetail saga begin')
    console.log(reviewId)
    const response = yield callUrl('GET', `${reviewDetailUrl}${reviewId}`)
    console.log('getReviewDetail saga response')
    console.log(response)
=======
    if (!reviewId) {
      throw Error('getReviewDetail saga reviewId not provided')
    }
    const response = yield callUrl('GET', `${reviewDetailUrl}${reviewId}/`)
>>>>>>> 790756d0a83bb0538f1d65dcebfe1885589df3e6
    yield put(actions.getReviewDetailSuccess(response))
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
    if (!archiveOwnerNickname) {
      throw Error('updateSortMethod saga archiveOwnerNickname not provided')
    }
    if (!sortMethod) {
      throw Error('updateSortMethod saga sortMethod not provided')
    }
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
    if (!archiveOwnerNickname) {
      throw Error('deleteReview saga archiveOwnerNickname not provided')
    }
    if (!reviewId) {
      throw Error('deleteReview saga reviewId not provided')
    }
    yield callUrl('DELETE', `${reviewDetailUrl}${reviewId}/`)
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
    const guestLogLink = `/${archiveOwnerNickname}/archive/guestlog`
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
