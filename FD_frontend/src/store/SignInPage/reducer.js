import * as actionTypes from './actionTypes'


const signInReducer = (state, action) => {
  let nextState = state
  if (!nextState) {
    nextState = {
      email: '',
      nickname: '',
      password: '',
      token: '',
      signInFailed: false,
      isLoggedIn: localStorage.hasOwnProperty('token'),
    }
    if (nextState.isLoggedIn) {
      nextState.token = localStorage.getItem('token')
      nextState.email = localStorage.getItem('email')
      nextState.nickname = localStorage.getItem('nickname')
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
      localStorage.setItem('nickname', JSON.stringify(action.nickname))
      console.log(action.nickname)
      return {
        ...nextState,
        email: action.email,
        token: action.token,
        nickname: action.nickname,
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
