import { takeEvery, put, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { callUrl, callUrlImg } from '../sagas'
import * as actions from './actions'
// import { getReviewDetail } from '../ArchivePage/actions'

const backendUrl = 'http://127.0.0.1:8000'
const reviewListUrl = `${backendUrl}/review/list`
const reviewDetailUrl = `${backendUrl}/review/detail`
const restListUrl = `${backendUrl}/restaurant/list`

export function* getPostReviewDetailSaga({ reviewId }) {
  try {
    if (reviewId === 'default') { // post new review
      yield put(actions.getPostReviewDetailSuccess(null, null, null, null,
        null, null, false))
    } else { // edit existing review
      const reviewDetail = yield callUrl('GET', `${reviewDetailUrl}/${reviewId}`)
      const { restaurant_id, eat_when, tags, score, content, photo, public_status } = reviewDetail
      const photoLink = `${backendUrl}${photo}`
      yield put(actions.getPostReviewDetailSuccess(restaurant_id, eat_when, tags, score,
        content, photoLink, public_status))
    }
  } catch (err) {
    console.log(err)
    yield put(actions.getPostReviewDetailFailed())
  }
}

export function* watchGetPostReviewDetailRequest() {
  yield takeEvery(actions.GET_POST_REVIEW_DETAIL_REQUEST, getPostReviewDetailSaga)
}

export function* postReviewSaga({ reviewId, nickname, restId, eatWhen, tags, score,
  content, photo, publicStatus }) {
  try {
    const reviewData = new FormData()
    reviewData.append('content', content)
    reviewData.append('eat_when', eatWhen)
    reviewData.append('public_status', publicStatus)
    reviewData.append('score', score)
    reviewData.append('restaurant_id', restId)
    if (photo != null) {
      reviewData.append('photo', photo)
    }
    reviewData.append('tags', tags)

    let response
    if (reviewId === 'default') { // post new review
      response = yield callUrlImg('POST', reviewListUrl, reviewData)
    } else { // edit existing review
      response = yield callUrlImg('PUT', `${reviewDetailUrl}/${reviewId}`, reviewData)
    }
    if (!response) {
      yield put(actions.postReviewFailed())
      return
    }
    yield put(actions.postReviewSuccess())
    yield put(push(`/${nickname}/archive`))
    // window.location.reload()

    /* if(reviewId != 'default'){
      yield put(getReviewDetail(reviewId, nickname))
    } */
  } catch (err) {
    console.log(err)
    yield put(actions.postReviewFailed())
  }
}

export function* watchPostMeetingRequest() {
  yield takeEvery(actions.POST_REVIEW_REQUEST, postReviewSaga)
}

export function* confirmRestSaga({ name, address, latitude, longitude }) {
  try {
    console.log('confirmRestSaga')
    const data = {
      name,
      address,
      latitude,
      longitude,
    }
    console.log(data)
    // Get ID for the POSTed restaurant
    const response = yield callUrl('POST', restListUrl, data)
    console.log('confirmRestSaga')
    console.log(response)
    yield put(actions.confirmRestSuccess(response.id))
  } catch (err) {
    console.log(err)
    yield put(actions.confirmRestFailed())
  }
}

export function* watchConfirmRestRequest() {
  yield takeEvery(actions.CONFIRM_REST_REQUEST, confirmRestSaga)
}

export default function* () {
  yield fork(watchGetPostReviewDetailRequest)
  yield fork(watchPostMeetingRequest)
  yield fork(watchConfirmRestRequest)
}
