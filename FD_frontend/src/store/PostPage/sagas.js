import { takeEvery, take, put, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { callUrl } from '../sagas'
import * as actions from './actions'
import { getReviewDetail } from '../ArchivePage/actions'

const backendUrl = 'http://127.0.0.1:8000/'
const reviewListUrl = `${backendUrl}FooDa/reviewlist/`
const reviewDetailUrl = `${backendUrl}FooDa/reviewdetail/`

export function* getPostReviewDetail({ reviewId }) {
  try {
    if (reviewId === null) { // post new review
      yield put(actions.getPostReviewDetailSuccess(null, null, null, null,
        null, null, false))
    }
    else { // edit existing review
      const reviewDetail = yield callUrl('GET', `${reviewDetailUrl}${reviewId}/`)
      const { restId, eatWhen, tags, score, content, photo, publicStatus } = reviewDetail
      yield put(actions.getPostReviewDetailSuccess(restId, eatWhen, tags, score,
        content, photo, publicStatus))
    }
  } catch (err) {
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
    const data = {
      restId,
      eatWhen,
      tags,
      score,
      content,
      photo,
      publicStatus,
    }
    if (reviewId === null) { // post new review
      yield callUrl('POST', reviewListUrl, data)
    } else { // edit existing review
      yield callUrl('POST', `${reviewDetailUrl}${reviewId}/`, data)
    }
    yield put(push(`/${nickname}/archive`))
    yield put(actions.postReviewSuccess())
    yield put(getReviewDetail(reviewId, nickname))
  } catch (err) {
    console.log(err)
    yield put(actions.postReviewFailed())
  }
}

export function* watchPostMeetingRequest() {
  yield takeEvery(actions.GET_POST_REVIEW_DETAIL_REQUEST, postReview)
}

export default function* () {
  yield fork(watchGetPostReviewDetailRequest)
  yield fork(watchPostMeetingRequest)
}
