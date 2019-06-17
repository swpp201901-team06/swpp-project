export const SEARCH_REQUEST = 'SEARCH_REQUEST'
export const GET_POPULAR_REVIEWS_REQUEST = 'GET_POPULAR_REVIEWS_REQUEST'
export const GET_POPULAR_REVIEWS_SUCCESS = 'GET_POPULAR_REVIEWS_SUCCESS'

export const searchSubmit = (key, value) => {
  return {
    type: SEARCH_REQUEST,
    key,
    value,
  }
}

export const getPopularReviews = () => {
  return {
    type: GET_POPULAR_REVIEWS_REQUEST
  }
}

export const getPopularReviewsSuccess = (reviewList) => {
  return {
    type: GET_POPULAR_REVIEWS_SUCCESS,
    reviewList
  }
}
    
