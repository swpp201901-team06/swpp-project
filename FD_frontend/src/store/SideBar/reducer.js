import * as actions from '../actions'

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
      nextState.token = localStorage.getItem('token')
      nextState.email = localStorage.getItem('email')
      nextState.nickname = localStorage.getItem('nickname')
    }
  }
  switch (action.type) {
    case actions.LOGOUT:
      localStorage.removeItem('token')
      localStorage.removeItem('email')
      localStorage.removeItem('nickname')
      nextState = {
        ...nextState,
        email: null,
        token: null,
        nickname: null,
        isLoggedIn: false,
      }
      return nextState
    default:
      return nextState
  }
}

export default sideBarReducer
