import * as actionTypes from './actionTypes'

export const gotoSignUp = () => {
  return {
    type: actionTypes.GOTO_SIGN_UP,
  }
}

export const requestSignIn = (email, password) => {
  return {
    type: actionTypes.REQUEST_SIGN_IN,
    email,
    password,
  }
}

export const signInFailed = () => {
  return {
    type: actionTypes.SIGN_IN_FAILED,
  }
}

export const signInSuccess = (token, email, password, nickname) => {
  return {
    type: actionTypes.SIGN_IN_SUCCESS,
    token,
    email,
    password,
    nickname,
  }
}

export const gotoArchive = (nickname) => {
  return {
    type: actionTypes.GOTO_ARCHIVE,
    nickname,
  }
}
