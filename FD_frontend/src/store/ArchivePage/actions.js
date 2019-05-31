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

export const getReviewList = (archiveOwnerNickname) => {
  console.log('ArchivePage actions getReviewList')
  console.log(archiveOwnerNickname)
  return {
    type: GET_REVIEW_LIST_REQUEST,
    archiveOwnerNickname,
  }
}

export const getReviewListSuccess = (reviewList) => {
  console.log('ArchivePage actions getReviewListSuccess')
  console.log(reviewList)
  return {
    type: GET_REVIEW_LIST_SUCCESS,
    reviewList,
  }
}

export const getReviewListFailed = () => {
  console.log('ArchivePage actions getReviewListFailed')
  return {
    type: GET_REVIEW_LIST_FAILED,
  }
}

export const getReviewDetail = (reviewId) => {
  console.log('ArchivePage actions getReviewDetail')
  console.log(reviewId)
  return {
    type: GET_REVIEW_DETAIL_REQUEST,
    reviewId,
  }
}

export const getReviewDetailSuccess = (reviewDetail) => {
  console.log('ArchivePage actions getReviewDetailSuccess')
  console.log(reviewDetail)
  return {
    type: GET_REVIEW_DETAIL_SUCCESS,
    reviewDetail,
  }
}

export const getReviewDetailFailed = () => {
  console.log('ArchivePage actions getReviewDetailFailed')
  return {
    type: GET_REVIEW_DETAIL_FAILED,
  }
}

export const updateSortMethod = (archiveOwnerNickname, sortMethod) => {
  console.log('ArchivePage actions updateSortMethod')
  console.log(archiveOwnerNickname)
  console.log(sortMethod)
  return {
    type: UPDATE_SORT_METHOD_REQUEST,
    archiveOwnerNickname,
    sortMethod,
  }
}

export const updateSortMethodSuccess = (reviewList, sortMethod) => {
  console.log('ArchivePage actions updateSortMethodSuccess')
  console.log(reviewList)
  console.log(sortMethod)
  return {
    type: UPDATE_SORT_METHOD_SUCCESS,
    reviewList,
    sortMethod,
  }
}

export const updateSortMethodFailed = () => {
  console.log('ArchivePage actions updateSortMethodFailed')
  return {
    type: UPDATE_SORT_METHOD_FAILED,
  }
}

export const deleteReview = (reviewId, archiveOwnerNickname) => {
  console.log('ArchivePage actions deleteReview')
  return {
    type: DELETE_REVIEW_REQUEST,
    reviewId,
    archiveOwnerNickname,
  }
}

export const deleteReviewSuccess = (reviewList) => {
  console.log('ArchivePage actions deleteReviewSuccess')
  console.log(reviewList)
  return {
    type: DELETE_REVIEW_SUCCESS,
    reviewList,
  }
}

export const deleteReviewFailed = () => {
  console.log('ArchivePage actions deleteReviewFailed')
  return {
    type: DELETE_REVIEW_FAILED,
  }
}

export const storeReviewId = (id) => {
  console.log('ArchivePage actions storeReviewId')
  console.log(id)
  return {
    type: STORE_REVIEW_ID,
    id,
  }
}

export const gotoGuestLog = (archiveOwnerNickname) => {
  console.log('ArchivePage actions gotoGuestLog')
  console.log(archiveOwnerNickname)
  return {
    type: GOTO_GUEST_LOG,
    archiveOwnerNickname,
  }
}
