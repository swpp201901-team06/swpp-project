import {initialState} from './selectors'
//import {baseHistory} from '../../index'
import * as ACTIONTYPES from "./actionTypes"

console.log("store/SignInPage/reducer 1")
console.log(initialState)
console.log("store/SignInPage/reducer 2")

const signInReducer = (state = initialState, action) => {
  console.log("store/SignInPage/reducer signInReducer 1")
  console.log(state)
  console.log(action)
  console.log("store/SignInPage/reducer signInReducer 2")
  switch (action.type) {
    case ACTIONTYPES.GOTO_SIGN_UP:
      console.log("store/SignInPage/reducer signInReducer 3")
      return state
    case ACTIONTYPES.REQUEST_SIGN_IN:
      console.log("store/SignInPage/reducer signInReducer 4")
      return state
    case ACTIONTYPES.SIGN_IN_SUCCESS:
      console.log("store/SignInPage/reducer signInReducer 5")
      localStorage.setItem('token', JSON.stringify(action.token))
      localStorage.setItem('email', JSON.stringify(action.email))
      return {
        ...state,
        email: action.email,
        token: action.token,
        nickname: action.nickname,
        signInFailed: false,
        isLoggedIn: true,
      }
    case ACTIONTYPES.SIGN_IN_FAILED:
      console.log("store/SignInPage/reducer signInReducer 6")
      return {
        ...state,
        signInFailed: true,
        isLoggedIn: false,
      }
    default:
      console.log("store/SignInPage/reducer signInReducer 7")
      return state
  }
}

export default signInReducer
