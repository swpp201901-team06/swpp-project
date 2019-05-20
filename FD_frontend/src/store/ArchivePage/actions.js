export const GET_REVIEW_LIST_REQUEST = 'GET_REVIEW_LIST_REQUEST'
export const GET_REVIEW_LIST_SUCCESS = 'GET_REVIEW_LIST_SUCCESS'
export const GET_REVIEW_LIST_FAILED = 'GET_REVIEW_LIST_FAILED'
export const GET_REVIEW_DETAIL_REQUEST = 'GET_REVIEW_DETAIL_REQUEST'
export const GET_REVIEW_DETAIL_SUCCESS = 'GET_REVIEW_DETAIL_SUCCESS'
export const GET_REVIEW_DETAIL_FAILED = 'GET_REVIEW_DETAIL_FAILED'
export const UPDATE_SORT_METHOD_REQUEST = 'UPDATE_SORT_METHOD_REQUEST'
export const UPDATE_SORT_METHOD_SUCCESS = 'UPDATE_SORT_METHOD_SUCCESS'
export const UPDATE_SORT_METHOD_FAILED = 'UPDATE_SORT_METHOD_FAILED'
export const DELETE_REVIEW_REQUEST = 'DELETE_REVIEW_REQUEST'
export const DELETE_REVIEW_SUCCESS = 'DELETE_REVIEW_SUCCESS'
export const DELETE_REVIEW_FAILED = 'DELETE_REVIEW_FAILED'
// export const GOTO_EDIT_REVIEW = 'GOTO_EDIT_REVIEW'
export const GOTO_POST_REVIEW = 'GOTO_POST_REVIEW'
export const GOTO_GUEST_LOG = 'GOTO_GUEST_LOG'

export const getReviewList = (archiveOwnerNickname) => {
  return {
    type: GET_REVIEW_LIST_REQUEST,
    archiveOwnerNickname,
  }
}

export const getReviewListSuccess = (reviewList) => {
  return {
    type: GET_REVIEW_LIST_SUCCESS,
    reviewList,
  }
}

export const getReviewListFailed = () => {
  return {
    type: GET_REVIEW_LIST_FAILED,
  }
}

export const getReviewDetail = (reviewId, archiveOwnerNickname) => {
  return {
    type: GET_REVIEW_DETAIL_REQUEST,
    reviewId,
    archiveOwnerNickname,
  }
}

export const getReviewDetailSuccess = (reviewDetail) => {
  return {
    type: GET_REVIEW_DETAIL_SUCCESS,
    reviewDetail,
  }
}

export const getReviewDetailFailed = () => {
  return {
    type: GET_REVIEW_DETAIL_FAILED,
  }
}

export const updateSortMethod = (archiveOwnerNickname, sortMethod) => {
  return {
    type: UPDATE_SORT_METHOD_REQUEST,
    archiveOwnerNickname,
    sortMethod,
  }
}

export const updateSortMethodSuccess = (reviewList, sortMethod) => {
  return {
    type: UPDATE_SORT_METHOD_SUCCESS,
    reviewList,
    sortMethod,
  }
}

export const updateSortMethodFailed = () => {
  return {
    type: UPDATE_SORT_METHOD_FAILED,
  }
}

export const deleteReview = (reviewId) => {
  return {
    type: DELETE_REVIEW_REQUEST,
    reviewId,
  }
}

export const deleteReviewSuccess = (reviewList) => {
  return {
    type: DELETE_REVIEW_SUCCESS,
    reviewList,
  }
}

export const deleteReviewFailed = () => {
  return {
    type: DELETE_REVIEW_FAILED,
  }
}

/*
export const gotoEditReview = (reviewId) => {
  return {
    type: GOTO_EDIT_REVIEW,
    reviewId,
  }
}
*/

export const gotoPostReview = () => {
  return {
    type: GOTO_POST_REVIEW,
  }
}

export const gotoGuestLog = (archiveOwnerNickname) => {
  return {
    type: GOTO_GUEST_LOG,
    archiveOwnerNickname,
  }
}
