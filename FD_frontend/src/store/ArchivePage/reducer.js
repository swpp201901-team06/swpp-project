import * as actions from './actions'


const archiveReducer = (state, action) => {
  let nextState = state
  const isLoggedIn = localStorage.hasOwnProperty('token')
  let token = null
  let userNickname = null
  console.log('archiveReducer begin')
  if (isLoggedIn) {
    console.log('archiveReducer isLoggedIn')
    token = JSON.parse(localStorage.getItem('token'))
    userNickname = JSON.parse(localStorage.getItem('nickname'))
  }
  console.log('archiveReducer after if isLoggedIn')
  console.log(nextState)
  if (!nextState) {
    console.log('archiveReducer !nextState')
    nextState = {
      userNickname,
      archiveOwnerNickname: null,
      token,
      isLoggedIn,
      sortMethod: null,
      reviews: [],
      selectedReviewId: null,
      selectedReviewObj: null,
    }
  }
  console.log('archiveReducer after initialization')
  console.log(userNickname)

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
        selectedReviewObj: action.reviewDetail,
      }

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
        selectedReviewObj: null
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
