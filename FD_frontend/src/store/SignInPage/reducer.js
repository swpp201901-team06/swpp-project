import * as actionTypes from './actionTypes'


const signInReducer = (state, action) => {
  if (!state) {
    state = {
      email: '',
      nickname: '',
      password: '',
      token: '',
      signInFailed: false,
      isLoggedIn: localStorage.hasOwnProperty('token'),
    }
    if (state.isLoggedIn) {
      state.token = localStorage.getItem('token')
      state.email = localStorage.getItem('email')
      state.nickname = localStorage.getItem('nickname')
    }
  }
  switch (action.type) {
    case actionTypes.GOTO_SIGN_UP:
      return state
    case actionTypes.REQUEST_SIGN_IN:
      return state
    case actionTypes.SIGN_IN_SUCCESS:
      localStorage.setItem('token', JSON.stringify(action.token))
      localStorage.setItem('email', JSON.stringify(action.email))
      localStorage.setItem('nickname', JSON.stringify(action.nickname))
      return {
        ...state,
        email: action.email,
        token: action.token,
        nickname: action.nickname,
        signInFailed: false,
        isLoggedIn: true,
      }
    case actionTypes.SIGN_IN_FAILED:
      return {
        ...state,
        signInFailed: true,
        isLoggedIn: false,
      }
    default:
      return state
  }
}

export default signInReducer
