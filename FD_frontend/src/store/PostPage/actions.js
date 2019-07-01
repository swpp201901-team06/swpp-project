export const GET_POST_REVIEW_DETAIL_REQUEST = 'GET_POST_REVIEW_DETAIL_REQUEST'
export const GET_POST_REVIEW_DETAIL_SUCCESS = 'GET_POST_REVIEW_DETAIL_SUCCESS'
export const GET_POST_REVIEW_DETAIL_FAILED = 'GET_POST_REVIEW_DETAIL_FAILED'
export const POST_REVIEW_REQUEST = 'POST_REVIEW_REQUEST'
export const POST_REVIEW_SUCCESS = 'POST_REVIEW_SUCCESS'
export const POST_REVIEW_FAILED = 'POST_REVIEW_FAILED'
export const CHANGE_PUBLIC_STATUS = 'CHANGE_PUBLIC_STATUS'
export const UPLOAD_IMAGE = 'UPLOAD_IMAGE'
export const CHANGE_INPUT = 'CHANGE_INPUT'
export const CLEAR_STATE = 'CLEAR_STATE'
export const CONFIRM_REST_REQUEST = 'CONFIRM_REST_REQUEST'
export const CONFIRM_REST_SUCCESS = 'CONFIRM_REST_SUCCESS'
export const CONFIRM_REST_FAILED = 'CONFIRM_REST_FAILED'

export const getPostReviewDetail = (reviewId) => {
  return {
    type: GET_POST_REVIEW_DETAIL_REQUEST,
    reviewId,
  }
}

export const getPostReviewDetailSuccess = (restId, eatWhen, tags, score,
  content, photo, publicStatus, restName) => {
  return {
    type: GET_POST_REVIEW_DETAIL_SUCCESS,
    restId,
    eatWhen,
    tags,
    score,
    content,
    photo,
    publicStatus,
    restName
  }
}

export const getPostReviewDetailFailed = () => {
  return {
    type: GET_POST_REVIEW_DETAIL_FAILED,
  }
}

export const uploadImage = (file) => {
  return {
    type: UPLOAD_IMAGE,
    file,
  }
}

export const changePublicStatus = (publicStatus) => {
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

export const changeInput = (key, value) => {
  return {
    type: CHANGE_INPUT,
    key,
    value,
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

export const clearState = () => {
  return {
    type: CLEAR_STATE,
  }
}

export const confirmRest = (restName, address, latitude, longitude) => {
  console.log('confirmRest action')
  return {
    type: CONFIRM_REST_REQUEST,
    name: restName,
    address,
    latitude: latitude.toFixed(6),
    longitude: longitude.toFixed(6),
  }
}

export const confirmRestSuccess = (restId, restName) => {
  return {
    type: CONFIRM_REST_SUCCESS,
    restId,
    restName
  }
}

export const confirmRestFailed = () => {
  return {
    type: CONFIRM_REST_FAILED,
  }
}