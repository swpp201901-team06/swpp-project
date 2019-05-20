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
      nextState.token = JSON.parse(localStorage.getItem('token'))
      nextState.email = JSON.parse(localStorage.getItem('email'))
      nextState.password = JSON.parse(localStorage.getItem('password'))
      nextState.nickname = JSON.parse(localStorage.getItem('nickname'))
    }
  }
  switch (action.type) {
    case actionTypes.GOTO_SIGN_UP:
      return nextState
    case actionTypes.REQUEST_SIGN_IN:
      return nextState
    case actionTypes.SIGN_IN_SUCCESS:
      localStorage.setItem('token', JSON.stringify(action.token))
      localStorage.setItem('email', JSON.stringify(action.email))
      localStorage.setItem('password', JSON.stringify(action.password))
      localStorage.setItem('nickname', JSON.stringify(action.nickname))
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
