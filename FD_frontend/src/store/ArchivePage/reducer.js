import * as actions from './actions'


const archiveReducer = (state, action) => {
  let nextState = state
  if (!nextState) {
    nextState = {
      userNickname: null,
      archiveOwnerNickname: null,
      token: null,
      isLoggedIn: localStorage.hasOwnProperty('token'),
      sortMethod: null,
      reviews: [],
      selectedReviewId: null,
      selectedReviewObj: null,
    }
    if (nextState.isLoggedIn) {
      nextState.token = localStorage.getItem('token')
      nextState.userNickname = localStorage.getItem('nickname')
    }
  }

  // TODO: use localStorage to temporarily save sortMethod
  switch (action.type) {
    case actions.GET_REVIEW_LIST_REQUEST:
      nextState.archiveOwnerNickname = action.archiveOwnerNickname
      return nextState

    case actions.GET_REVIEW_LIST_SUCCESS:
      nextState.reviews = action.reviewList
      return nextState

    case actions.GET_REVIEW_LIST_FAILED:
      return nextState

    case actions.GET_REVIEW_DETAIL_REQUEST:
      nextState.selectedReviewId = action.reviewId
      nextState.selectedReviewObj = null
      nextState.archiveOwnerNickname = action.archiveOwnerNickname
      return nextState

    case actions.GET_REVIEW_DETAIL_SUCCESS:
      nextState.selectedReviewObj = action.reviewDetail
      return nextState

    case actions.GET_REVIEW_DETAIL_FAILED:
      nextState.selectedReviewObj = null
      nextState.selectedReviewId = null
      return nextState

    case actions.UPDATE_SORT_METHOD_REQUEST:
      return nextState

    case actions.UPDATE_SORT_METHOD_SUCCESS:
      nextState.sortMethod = action.sortMethod
      nextState.reviews = action.reviewList
      return nextState

    case actions.UPDATE_SORT_METHOD_FAILED:
      return nextState

    case actions.DELETE_REVIEW_REQUEST:
      return nextState

    case actions.DELETE_REVIEW_SUCCESS:
      nextState.reviews = action.reviewList
      return nextState

    case actions.DELETE_REVIEW_FAILED:
      return nextState

    /*
    case actions.GOTO_EDIT_REVIEW:
      nextState.selectedReviewId = action.reviewId
      return nextState
    */

    case actions.GOTO_POST_REVIEW:
      return nextState

    case actions.GOTO_GUEST_LOG:
      return nextState

    default:
      return nextState
  }
}

export default archiveReducer
