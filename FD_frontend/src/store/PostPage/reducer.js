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
      photoUrl: '',
      publicStatus: 'False',
    }
    if (nextState.isLoggedIn) {
      nextState.nickname = JSON.parse(localStorage.getItem('nickname'))
    }
  }

  switch (action.type) {
    case actions.GET_POST_REVIEW_DETAIL_REQUEST:
      nextState.isEdit = true
      nextState.reviewId = action.reviewId
      return nextState

    case actions.GET_POST_REVIEW_DETAIL_SUCCESS:
      let bPublicStatus
      if(action.publicStatus == false){
        bPublicStatus = 'False'
      }
      else{
        bPublicStatus = 'True'
      }
      return {
              ...nextState,
              restId: action.restId,
              tags: action.tags,
              score: action.score,
              photoUrl: action.photo,
              publicStatus: bPublicStatus,
              eatWhen: action.eatWhen,
              content: action.content
      }

    case actions.GET_POST_REVIEW_DETAIL_FAILED:
      return nextState

    case actions.UPLOAD_IMAGE:
      return {
              ...nextState,
              photo: action.file
      }

    case actions.CHANGE_INPUT:
      switch(action.key) {
        case "date":
          return {
              ...nextState,
              eatWhen: action.value
          }
        case "restId":
          return {
              ...nextState,
              restId: action.value
          }
        case "score":
          return {
              ...nextState,
              score: action.value
          }
        case "content":
          return {
              ...nextState,
              content: action.value
          }
        case "tag":
          return {
              ...nextState,
              tags: action.value
          }
        default:
          return nextState
        }
    case actions.POST_REVIEW_REQUEST:
      return nextState

    case actions.POST_REVIEW_SUCCESS:
      return nextState

    case actions.POST_REVIEW_FAILED:
      return nextState

		case actions.CHANGE_PUBLIC_STATUS:
      if(action.publicStatus == 'True'){
			  return {
							  ...nextState,
							  publicStatus: 'False'
			  }
      }
      else if(action.publicStatus == 'False'){
        return {
                ...nextState,
                publicStatus: 'True'
        }
      }
    case actions.CLEAR_STATE:
      return []
    default:
      return nextState
  }
}

export default postReducer
