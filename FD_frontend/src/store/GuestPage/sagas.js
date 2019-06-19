import { takeEvery, take, put, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { callUrl } from '../sagas'
import * as actions from './actions'

const backendUrl = 'http://3.13.219.185:8000/'
const rankingUrl = `${backendUrl}review/ranking`
const recommendUrl = `${backendUrl}recommend/`

export function* goToSearchPage({key, value}) {
  try {
    yield put(push("/search/"+key+"/"+value))
    window.location.reload()
    } catch(e) {
    console.error(e)
  }
}

export function* getRankingReviews() {
  try {
    let response
    if(localStorage.hasOwnProperty('nickname')) {
      const nickname=JSON.parse(localStorage.getItem('nickname'))
      response = yield callUrl('GET', `${recommendUrl}${nickname}`)
    }
    else {
      response = yield callUrl('GET', rankingUrl)
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

    yield put(actions.getPopularReviewsSuccess(newResponse))
  } catch (err) {
    console.log(err)
  }
}

export function* watchGoToSearchPage() {
  yield takeEvery(actions.SEARCH_REQUEST, goToSearchPage)
}

export function* watchGetPopularReviews() {
  yield takeEvery(actions.GET_POPULAR_REVIEWS_REQUEST, getRankingReviews)
}

export default function* () {
  yield fork(watchGoToSearchPage)
  yield fork(watchGetPopularReviews)
}
