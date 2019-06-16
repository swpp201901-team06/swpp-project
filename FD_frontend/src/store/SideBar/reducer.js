import * as actions from './actions'

const sideBarReducer = (state, action) => {
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
    case actions.LOGOUT:
      localStorage.removeItem('token')
      localStorage.removeItem('email')
      localStorage.removeItem('nickname')
      localStorage.removeItem('password')
      nextState = {
        ...nextState,
        email: null,
        token: null,
        nickname: null,
        password: null,
        signInFailed: false,
        isLoggedIn: false,
      }
      return nextState
    case actions.GOTO_ARCHIVE_BUTTON:
      return {
        ...nextState,
      }
    default:
      return nextState
  }
}

export default sideBarReducer
