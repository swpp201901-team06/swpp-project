export const GET_POST_REVIEW_DETAIL_REQUEST = 'GET_POST_REVIEW_DETAIL_REQUEST'
export const GET_POST_REVIEW_DETAIL_SUCCESS = 'GET_POST_REVIEW_DETAIL_SUCCESS'
export const GET_POST_REVIEW_DETAIL_FAILED = 'GET_POST_REVIEW_DETAIL_FAILED'
export const POST_REVIEW_REQUEST = 'POST_REVIEW_REQUEST'
export const POST_REVIEW_SUCCESS = 'POST_REVIEW_SUCCESS'
export const POST_REVIEW_FAILED = 'POST_REVIEW_FAILED'
export const CHANGE_PUBLIC_STATUS = 'CHANGE_PUBLIC_STATUS'

export const getPostReviewDetail = (reviewId) => {
  return {
    type: GET_POST_REVIEW_DETAIL_REQUEST,
    reviewId,
  }
}

export const getPostReviewDetailSuccess = (restId, eatWhen, tags, score,
  content, photo, publicStatus) => {
  console.log('get post review detail success')
  console.log({ restId, eatWhen, tags, score, content, photo, publicStatus })
  return {
    type: GET_POST_REVIEW_DETAIL_SUCCESS,
    restId,
    eatWhen,
    tags,
    score,
    content,
    photo,
    publicStatus,
  }
}

export const getPostReviewDetailFailed = () => {
  return {
    type: GET_POST_REVIEW_DETAIL_FAILED,
  }
}

export const changePublicStatus = (publicStatus) => {
  console.log(publicStatus)
  return {
    type: CHANGE_PUBLIC_STATUS,
    publicStatus,
	}
}

export const postReview = (reviewId, nickname, restId, eatWhen, tags, score,
  content, photo, publicStatus) => {
  return {
    type: POST_REVIEW_REQUEST,
    reviewId,
    nickname,
    restId,
    eatWhen,
    tags,
    score,
    content,
    photo,
    publicStatus,
  }
}

export const postReviewSuccess = () => {
  return {
    type: POST_REVIEW_SUCCESS,
  }
}

export const postReviewFailed = () => {
  return {
    type: POST_REVIEW_FAILED,
  }
}
