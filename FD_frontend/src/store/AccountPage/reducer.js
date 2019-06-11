import * as actions from './actions'

const accountReducer = (state=[], action) => {
  switch(action.ype) {
    case actions.CHANGE_ACCOUNT_INPUT:
      switch (action.key) {
        case 'email':
          return {
            ...nextState,
            email: action.value,
          }
        case 'restId':
          return {
            ...nextState,
            restId: action.value,
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
