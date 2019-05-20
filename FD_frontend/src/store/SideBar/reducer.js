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
      nextState.token = JSON.parselocalStorage.getItem('token'))
      nextState.email = JSON.parselocalStorage.getItem('email'))
      nextState.nickname = JSON.parselocalStorage.getItem('nickname'))
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
      window.location.reload()
      return nextState
    default:
      return nextState
  }
}

export default sideBarReducer
