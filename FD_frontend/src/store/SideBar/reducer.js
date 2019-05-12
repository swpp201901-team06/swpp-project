import { initialState } from '../SignInPage/selectors'

import * as actions from '../actions'

const sideBarReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOGOUT':
      localStorage.removeItem('token')
      localStorage.removeItem('email')
      localStorage.removeItem('nickname')
      return {
        ...state,
        email: null,
        token: null,
        nickname: null,
        isLoggedIn: false
      }
    default:
      return state
  }
}

export default sideBarReducer
