import { takeEvery, take, put, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { callUrl } from '../sagas'
import * as actions from './actions'

const backendUrl = 'http://127.0.0.1:8000'
const myReviewListUrl = `${backendUrl}/review/list`
const archiveDetailUrl = `${backendUrl}/archive/detail`
const reviewDetailUrl = `${backendUrl}/review/detail`
const restDetailUrl = `${backendUrl}/restaurant/detail`
const followUrl = `${backendUrl}/user/follows`

export function* getReviewListSaga({ sortOption, archiveOwnerNickname }) {
  try {
    let response
    if (sortOption === 'default') {
      response = yield callUrl('GET', `${myReviewListUrl}/${archiveOwnerNickname}`)
    } else {
      response = yield callUrl('GET', `${myReviewListUrl}/${archiveOwnerNickname}/${sortOption}`)
    }
    const archiveResponse = yield callUrl('GET', `${archiveDetailUrl}/${archiveOwnerNickname}`)
    response = response.map((review) => {
      const newReview = {
        ...review,
        eatWhen: review.eat_when,
        postTime: review.post_time,
        publicStatus: review.public_status,
        restaurantId: review.restaurant_id,
      }
      delete newReview.eat_when
      delete newReview.post_time
      delete newReview.public_status
      delete newReview.restaurant_id
      return newReview
    })
    yield put(actions.getReviewListSuccess(response, archiveResponse))
  } catch (err) {
    console.log(err)
    yield put(actions.getReviewListFailed())
  }
}

export function* watchGetReviewListRequest() {
  yield takeEvery(actions.GET_REVIEW_LIST_REQUEST, getReviewListSaga)
}

export function* getReviewDetailSaga({ reviewId }) {
  try {
    if (!reviewId) {
      throw Error('getReviewDetail saga reviewId not provided')
    }
    const response = yield callUrl('GET', `${reviewDetailUrl}/${reviewId}`)
    const newResponse = {
      ...response,
      eatWhen: response.eat_when,
      postTime: response.post_time,
      publicStatus: response.public_status,
      restaurantId: response.restaurant_id,
    }
    delete newResponse.eat_when
    delete newResponse.post_time
    delete newResponse.public_status
    delete newResponse.restaurant_id
    const restDetailResponse = yield callUrl('GET', `${restDetailUrl}/${response.restaurant_id}`)
    yield put(actions.getReviewDetailSuccess(newResponse, restDetailResponse))
  } catch (err) {
    console.log(err)
    yield put(actions.getReviewDetailFailed())
  }
}

export function* watchGetReviewDetailRequest() {
  yield takeEvery(actions.GET_REVIEW_DETAIL_REQUEST, getReviewDetailSaga)
}

export function* updateSortMethodSaga({ archiveOwnerNickname, sortMethod }) {
  try {
    if (!archiveOwnerNickname) {
      throw Error('updateSortMethod saga archiveOwnerNickname not provided')
    }
    if (!sortMethod) {
      throw Error('updateSortMethod saga sortMethod not provided')
    }
    const response = yield callUrl(
      'GET',
      `${myReviewListUrl}/${archiveOwnerNickname}/${sortMethod}`
    )
    const newResponse = response.map((review) => {
      const newReview = {
        ...review,
        eatWhen: review.eat_when,
        postTime: review.post_time,
        publicStatus: review.public_status,
        restaurantId: review.restaurant_id,
      }
      delete newReview.eat_when
      delete newReview.post_time
      delete newReview.public_status
      delete newReview.restaurant_id
      return newReview
    })
    yield put(actions.updateSortMethodSuccess(newResponse, sortMethod))
  } catch (err) {
    console.log(err)
    yield put(actions.updateSortMethodFailed())
  }
}

export function* watchUpdateSortMethodRequest() {
  yield takeEvery(actions.UPDATE_SORT_METHOD_REQUEST, updateSortMethodSaga)
}

export function* deleteReviewSaga({ reviewId, archiveOwnerNickname }) {
  try {
    if (!archiveOwnerNickname) {
      throw Error('deleteReview saga archiveOwnerNickname not provided')
    }
    if (!reviewId) {
      throw Error('deleteReview saga reviewId not provided')
    }
    yield callUrl('DELETE', `${reviewDetailUrl}/${reviewId}`)
    const response = yield callUrl('GET', `${myReviewListUrl}/${archiveOwnerNickname}`)
    const newResponse = response.map((review) => {
      const newReview = {
        ...review,
        eatWhen: review.eat_when,
        postTime: review.post_time,
        publicStatus: review.public_status,
        restaurantId: review.restaurant_id,
      }
      delete newReview.eat_when
      delete newReview.post_time
      delete newReview.public_status
      delete newReview.restaurant_id
      return newReview
    })
    yield put(actions.deleteReviewSuccess(newResponse))
  } catch (err) {
    console.log(err)
    yield put(actions.deleteReviewFailed())
  }
}

export function* followArchiveSaga({ archiveOwner }) {
  try {
    const userId = JSON.parse(localStorage.getItem('id'))
    const targetResponse = yield callUrl('GET', `${backendUrl}/user/exists/username/${archiveOwner}`)
    const ownerId = targetResponse.id
    const response=yield callUrl('PUT', `${followUrl}/${userId}`, {follows:[ownerId]})
    const followerResponse = yield callUrl('GET', `${followUrl}/${userId}`)
    console.log(followerResponse)

    if (followerResponse.follows.includes(ownerId)) {
      console.log('following')
      yield put(actions.following())
    }
    else {
      console.log('not following')
      yield put(actions.notFollowing())
    }
  } catch(e) {
    console.log(e)
  }
}
  
export function* watchDeleteReviewRequest() {
  yield takeEvery(actions.DELETE_REVIEW_REQUEST, deleteReviewSaga)
}

export function* watchGotoGuestLog() {
  while (true) {
    const { archiveOwnerNickname } = yield take(actions.GOTO_GUEST_LOG)
    const guestLogLink = `/${archiveOwnerNickname}/archive/guestlog`
    yield put(push(guestLogLink))
  }
}

export function* watchFollowArchive() {
  yield takeEvery(actions.FOLLOW_ARCHIVE, followArchiveSaga)
}

export default function* () {
  yield fork(watchGetReviewListRequest)
  yield fork(watchGetReviewDetailRequest)
  yield fork(watchUpdateSortMethodRequest)
  yield fork(watchDeleteReviewRequest)
  yield fork(watchGotoGuestLog)
  yield fork(watchFollowArchive)
}
