import {initialState} from './selectors'

console.log(initialState)

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GOTO_SIGN_UP':
      return state
    case 'REQUEST_SIGN_IN':
      return state
    case 'SIGN_IN_FAILED':
      return state
    case 'SIGN_IN_FAILED':
      return state
    default:
      return state
  }
}

export default signInReducer
