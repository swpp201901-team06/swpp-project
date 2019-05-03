import {initialState} from './selectors'
//import {baseHistory} from '../../index'

console.log("store/SignInPage/reducer 1")
console.log(initialState)
console.log("store/SignInPage/reducer 2")

const signInReducer = (state = initialState, action) => {
  console.log("store/SignInPage/reducer signInReducer 1")
  console.log(state)
  console.log(action)
  console.log("store/SignInPage/reducer signInReducer 2")
  switch (action.type) {
    case 'GOTO_SIGN_UP':
      console.log("store/SignInPage/reducer signInReducer 3")
      return state
    case 'REQUEST_SIGN_IN':
      console.log("store/SignInPage/reducer signInReducer 4")
      return state
    case 'SIGN_IN_FAILED':
      console.log("store/SignInPage/reducer signInReducer 5")
      return state
    case 'SIGN_IN_FAILED':
      console.log("store/SignInPage/reducer signInReducer 6")
      return state
    default:
      console.log("store/SignInPage/reducer signInReducer 7")
      return state
  }
}

export default signInReducer
