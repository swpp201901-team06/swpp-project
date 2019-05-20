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
    if (reviewId === 'default') { // post new review
      yield put(actions.getPostReviewDetailSuccess(null, null, null, null,
        null, null, false))
    }
    else { // edit existing review
      console.log('get post review detail saga')
      console.log(`${reviewDetailUrl}${reviewId}/`)
      const reviewDetail = yield callUrl('GET', `${reviewDetailUrl}${reviewId}/`)
      console.log('after getting')
      const jsonData = yield reviewDetail.json()
      console.log(reviewDetail)
      console.log(jsonData)
      const { restId, eatWhen, tags, score, content, photo, publicStatus } = jsonData
      yield put(actions.getPostReviewDetailSuccess(restId, eatWhen, tags, score,
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
    const data = {
      restId,
      eatWhen,
      tags,
      score,
      content,
      photo,
      publicStatus,
    }

		let bPublicStatus;
		if(publicStatus == 'public'){
			bPublicStatus = 'True'
		}
		else{
			bPublicStatus = 'False'
		}
    if (reviewId == 'default') { // post new review
      yield callUrl('POST', reviewListUrl, {content: content, eatWhen: eatWhen, publicStatus: bPublicStatus, score: score, restaurantId: restId, tags: tags})
    } else { // edit existing review
      yield callUrl('PUT', `${reviewDetailUrl}${reviewId}/`, {content: content, eatWhen: eatWhen, publicStatus: bPublicStatus, score: score, restaurantId: restId, tags: tags})
    }
    yield put(actions.postReviewSuccess())
    yield put(push('/'+nickname+'/archive'))
    /*if(reviewId != 'default'){
      yield put(getReviewDetail(reviewId, nickname))
    }*/
  }
  catch (err) {
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
