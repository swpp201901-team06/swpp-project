import { takeEvery, take, put, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { callUrl, callUrlImg } from '../sagas'
import * as actions from './actions'
import { getReviewDetail } from '../ArchivePage/actions'

const backendUrl = 'http://127.0.0.1:8000/'
const reviewListUrl = `${backendUrl}review/list`
const reviewDetailUrl = `${backendUrl}review/detail/`

export function* getPostReviewDetail({ reviewId }) {
  try {
    if (reviewId === 'default') { // post new review
      yield put(actions.getPostReviewDetailSuccess(null, null, null, null,
        null, null, false))
    }
    else { // edit existing review
      console.log('get post review detail saga')
      console.log(`${reviewDetailUrl}${reviewId}`)
      const reviewDetail = yield callUrl('GET', `${reviewDetailUrl}${reviewId}`)
      console.log('after getting')
      const { restaurantId, eatWhen, tags, score, content, photo, publicStatus }
        = reviewDetail

      yield put(actions.getPostReviewDetailSuccess(restaurantId, eatWhen, tags, score,
        content, photo, publicStatus))
    }
  } catch (err) {
    console.log('get post review detail error')
    console.log(err)
    yield put(actions.getPostReviewDetailFailed())
  }
}

export function* watchGetPostReviewDetailRequest() {
  yield takeEvery(actions.GET_POST_REVIEW_DETAIL_REQUEST, getPostReviewDetail)
}

export function* postReview({ reviewId, nickname, restId, eatWhen, tags, score,
  content, photo, publicStatus }) {
  try {
    console.log('postReview saga begin')
    console.log({ reviewId, nickname, restId, eatWhen, tags, score, content, photo, publicStatus })
    const data = {
      restId,
      eatWhen,
      tags,
      score,
      content,
      photo,
      publicStatus,
    }

    let review_data = new FormData()
    review_data.append('content', content)
    review_data.append('eatWhen', eatWhen)
    review_data.append('publicStatus', publicStatus)
    review_data.append('score', score)
    review_data.append('restaurantId', restId)
    if (photo != null) {
      review_data.append('photo', photo)
    }
    review_data.append('tags', tags)

    console.log('postReview before callUrlImg')
    console.log(nickname)
    console.log(review_data)
    let response
    if (reviewId === 'default') { // post new review
      console.log('postReview callUrlImg 1')
      response = yield callUrlImg('POST', reviewListUrl, review_data)
    } else { // edit existing review
      console.log('postReview callUrlImg 2')
      response = yield callUrlImg('PUT', `${reviewDetailUrl}${reviewId}/`, review_data)
    }
    console.log('postReview after callUrlImg')
    console.log(response)
    console.log(response.ok)
    if (!response) {
      console.log('postReview if !response')
      yield put(actions.postReviewFailed())
      return
    }
    console.log('postReview response valid')
    yield put(actions.postReviewSuccess())
    console.log('postReview saga after postReviewSuccess')
    console.log(nickname)
    yield put(push(`/${nickname}/archive`))
    window.location.reload()

    /* if(reviewId != 'default'){
      yield put(getReviewDetail(reviewId, nickname))
    } */
  } catch (err) {
    console.log(err)
    yield put(actions.postReviewFailed())
  }
}

export function* watchPostMeetingRequest() {
  yield takeEvery(actions.POST_REVIEW_REQUEST, postReview)
}

export default function* () {
  yield fork(watchGetPostReviewDetailRequest)
  yield fork(watchPostMeetingRequest)
}
