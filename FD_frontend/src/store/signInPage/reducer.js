import {initialState} from 'store/signInPage/selectors'

console.log("store/signInPage/reducer 0")
console.log(initialState)
console.log("store/signInPage/reducer 0.1")

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
