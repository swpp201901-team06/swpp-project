import { takeEvery, put, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { callUrl } from '../sagas'
import * as actions from './actions'

const backendUrl = 'http://127.0.0.1:8000'
const usernameUrl = `${backendUrl}/review/search`
const tagUrl = `${backendUrl}tag/filter`

export function* getResultsSaga({ key, value }) {
  try {
    let response
    if (key === 'author') {
      response = yield callUrl('GET', `${usernameUrl}/${value}`)
    } else {
      response = yield callUrl('GET', `${tagUrl}/${value}`)
    }
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

    yield put(actions.getResultsSuccess(newResponse))
  } catch (err) {
    console.log(err)
    yield put(actions.getResultsFailed())
  }
}

export function* watchGetResultsRequest() {
  yield takeEvery(actions.GET_RESULTS_REQUEST, getResultsSaga)
}

export default function* () {
  yield fork(watchGetResultsRequest)
}
