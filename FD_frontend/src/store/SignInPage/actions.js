import * as ACTIONTYPES from "./actionTypes"

export const gotoSignUp = () => {
  return {
    type: ACTIONTYPES.GOTO_SIGN_UP,
  }
}

export const requestSignIn = (email, password) => {
  return {
    type: ACTIONTYPES.REQUEST_SIGN_IN,
    email: email,
    password: password,
  }
}

export const signInFailed = () => {
  return {
    type: ACTIONTYPES.SIGN_IN_FAILED,
  }
}

export const signInSuccess = (token, email, nickname) => {
  return {
    type: ACTIONTYPES.SIGN_IN_SUCCESS,
    token: token,
    email: email,
    nickname: nickname,
  }
}
