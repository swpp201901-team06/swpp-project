import * as actions from './actions'

const postReducer = (state, action) => {
  let nextState = state
  if (!nextState) {
    nextState = {
      nickname: null,
      isEdit: false,
      reviewId: null,
      isLoggedIn: localStorage.hasOwnProperty('token'),
      restId: null,
      eatWhen: null,
      tags: null,
      score: null,
      content: null,
      photo: null,
      publicStatus: false,
    }
    if (nextState.isLoggedIn) {
      nextState.nickname = localStorage.getItem('nickname')
    }
  }

  switch (action.type) {
    case actions.GET_POST_REVIEW_DETAIL_REQUEST:
      nextState.isEdit = true
      nextState.reviewId = action.reviewId
      return nextState

    case actions.GET_POST_REVIEW_DETAIL_SUCCESS:
      nextState.restId = action.restId
      nextState.eatWhen = action.eatWhen
      nextState.tags = action.tags
      nextState.score = action.score
      nextState.photo = action.photo
      nextState.publicState = action.publicStatus
      return nextState

    case actions.GET_POST_REVIEW_DETAIL_FAILED:
      return nextState

    case actions.POST_REVIEW_REQUEST:
      return nextState

    case actions.POST_REVIEW_SUCCESS:
      return nextState

    case actions.POST_REVIEW_FAILED:
      return nextState

		case actions.CHANGE_PUBLIC_STATUS:
			return {
							...nextState,
							pubStatusText: action.publicStatus
			}
    default:
      return nextState
  }
}

export default postReducer
