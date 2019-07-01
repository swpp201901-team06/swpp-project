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
      nextState.token = JSON.parse(localStorage.getItem('token'))
      nextState.userNickname = JSON.parse(localStorage.getItem('nickname'))
    }
  }

  // TODO: use localStorage to temporarily save sortMethod
  switch (action.type) {
    case actions.GET_REVIEW_LIST_REQUEST:
      nextState.archiveOwnerNickname = action.archiveOwnerNickname
      return nextState

    case actions.GET_REVIEW_LIST_SUCCESS:
      return {
        ...nextState,
        reviews: action.reviewList,
      }

    case actions.GET_REVIEW_LIST_FAILED:
      return nextState

    case actions.GET_REVIEW_DETAIL_SUCCESS:
      return {
        ...nextState,
        selectedReviewObj: {
          ...action.reviewDetail,
          restName: action.restObj.name,
          restAddr: action.restObj.address,
          restLat: action.restObj.latitude,
          restLong: action.restObj.longitude,
        },
      }

    case actions.GET_REVIEW_DETAIL_FAILED:
      return {
        ...nextState,
        selectedReviewObj: null,
        selectedReviewId: null,
      }

    case actions.UPDATE_SORT_METHOD_REQUEST:
      return nextState

    case actions.UPDATE_SORT_METHOD_SUCCESS:
      return {
        ...nextState,
        sortMethod: action.sortMethod,
        reviews: action.reviewList,
      }

    case actions.UPDATE_SORT_METHOD_FAILED:
      return nextState

    case actions.DELETE_REVIEW_REQUEST:
      return nextState

    case actions.DELETE_REVIEW_SUCCESS:
      return {
        ...nextState,
        reviews: action.reviewList,
        selectedReviewId: null,
        selectedReviewObj: null,
      }

    case actions.DELETE_REVIEW_FAILED:
      return nextState

    case actions.STORE_REVIEW_ID:
      return {
        ...nextState,
        selectedReviewId: action.id,
        selectedReviewObj: null,
      }
      
    case 'POST_REVIEW_SUCCESS':
      return {
        ...nextState,
        selectedReviewId: null,
        selectedReviewObj: null,
      }

    case actions.GOTO_POST_REVIEW:
      return nextState

    case actions.GOTO_GUEST_LOG:
      return nextState

    default:
      return nextState
  }
}

export default archiveReducer
