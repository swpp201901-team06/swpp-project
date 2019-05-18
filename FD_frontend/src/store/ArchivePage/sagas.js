import { takeEvery, put, call, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from 'services/api'
import * as actions from './actions'

const reviewDetailUrls = '/'

export function* getReviewDetail({id}) {
  try {
    const reponse = yield call(api.post, reviewDetailUrl, {id: id})
  }
  catch(err) {
    console.log(err);
  }
}

export function* watchReviewDetailRequest() {
  yield takeEvery(actions.REVIEW_DETAIL_REQUEST, getReviewDetail);
}

export function* deleteReview({review}) {
	try {
		const response = yield call(api.delete, reviewDetailUrl, {id: id})
  }
  catch(err) {
    console.log(err);
  }
}

export function* watchDeleteReviewRequest() {
	yield takeEvery(actions.DELETE_REVIEW_REQUEST, deleteReview);
}

export default function* () {
  yield fork(watchReviewDetailRequest);
	yield fork(watchDeleteReviewRequest);
}
