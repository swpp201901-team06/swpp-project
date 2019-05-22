import * as actions from './actions'

const postReducer = (state, action) => {
  let nextState = state
  const isLoggedIn = localStorage.hasOwnProperty('token')
  let nickname = null
  console.log('post reducer begin')
  if (isLoggedIn) {
    console.log('post reducer nextState isLoggedIn')
    nickname = JSON.parse(localStorage.getItem('nickname'))
  }
  console.log('postReducer after if isLoggedIn')
  console.log(nickname)
  if (!nextState) {
    nextState = {
      nickname,
      isEdit: false,
      reviewId: null,
      isLoggedIn,
      restId: null,
      eatWhen: null,
      tags: null,
      score: null,
      content: null,
      photo: null,
      photoUrl: '',
      publicStatus: 'False',
    }
  }
  console.log('postREducer before switch')
  console.log(nextState)
  console.log(action)

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
      console.log('post review request reducer')
      return nextState

    case actions.POST_REVIEW_SUCCESS:
        console.log('post review success reducer')
      return nextState

    case actions.POST_REVIEW_FAILED:
      console.log('post review failed reducer')
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
      return {}
    default:
      return nextState
  }
}

export default postReducer
