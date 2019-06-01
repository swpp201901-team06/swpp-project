import * as actionTypes from './actionTypes'


const signInReducer = (state, action) => {
  let nextState = state
  if (!nextState) {
    nextState = {
      email: null,
      nickname: null,
      password: null,
      token: null,
      signInFailed: false,
      isLoggedIn: localStorage.hasOwnProperty('token'),
    }
    if (nextState.isLoggedIn) {
      console.log('signInReducer if nextState.isLoggedIn')
      console.log(localStorage)
      nextState = {
        ...nextState,
        token: JSON.parse(localStorage.getItem('token')),
        email: JSON.parse(localStorage.getItem('email')),
        password: JSON.parse(localStorage.getItem('password')),
        nickname: JSON.parse(localStorage.getItem('nickname')),
      }
    }
  }
  switch (action.type) {
    case actionTypes.GOTO_SIGN_UP:
      return nextState
    case actionTypes.REQUEST_SIGN_IN:
      return nextState
    case actionTypes.SIGN_IN_SUCCESS:
      console.log(action.nickname)
      return {
        ...nextState,
        email: action.email,
        token: action.token,
        nickname: action.nickname,
        password: action.password,
        signInFailed: false,
        isLoggedIn: true,
      }
    case actionTypes.SIGN_IN_FAILED:
      return {
        ...nextState,
        signInFailed: true,
        isLoggedIn: false,
      }
    case actionTypes.GOTO_ARCHIVE:
      return nextState
    default:
      return nextState
  }
}

export default signInReducer
