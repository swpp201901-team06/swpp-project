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
export const GOTO_GUEST_LOG = 'GOTO_GUEST_LOG'
export const STORE_REVIEW_ID = 'STORE_REVIEW_ID'
export const FOLLOW_ARCHIVE = 'FOLLOW_ARCHIVE'
export const FOLLOWING = 'FOLLOWING'
export const NOT_FOLLOWING = 'NOT_FOLLOWING'

export const getReviewList = (sortOption, archiveOwnerNickname) => {
  return {
    type: GET_REVIEW_LIST_REQUEST,
    sortOption,
    archiveOwnerNickname,
  }
}

export const getReviewListSuccess = (reviewList, archive) => {
  return {
    type: GET_REVIEW_LIST_SUCCESS,
    reviewList,
    archive
  }
}

export const getReviewListFailed = () => {
  return {
    type: GET_REVIEW_LIST_FAILED,
  }
}

export const getReviewDetail = (reviewId) => {
  return {
    type: GET_REVIEW_DETAIL_REQUEST,
    reviewId,
  }
}

export const getReviewDetailSuccess = (reviewDetail, restObj) => {
  return {
    type: GET_REVIEW_DETAIL_SUCCESS,
    reviewDetail,
    restObj,
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

export const deleteReview = (reviewId, archiveOwnerNickname) => {
  return {
    type: DELETE_REVIEW_REQUEST,
    reviewId,
    archiveOwnerNickname,
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

export const storeReviewId = (id) => {
  return {
    type: STORE_REVIEW_ID,
    id,
  }
}

export const gotoGuestLog = (archiveOwnerNickname) => {
  return {
    type: GOTO_GUEST_LOG,
    archiveOwnerNickname,
  }
}

export const followArchive = (archiveOwner) => {
  return {
    type: FOLLOW_ARCHIVE,
    archiveOwner
  }
}

export const following = () => {
  return {
    type: FOLLOWING,
  }
}

export const notFollowing = () => {
  return {
    type: NOT_FOLLOWING,
  }
}
