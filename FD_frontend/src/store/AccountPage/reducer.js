import * as actions from './actions'

const accountReducer = (state=[], action) => {
  let nextState = state
  switch(action.type) {
    case actions.GET_ACCOUNT_SUCCESS:
      return {
        ...nextState,
        email: action.email,
        password: action.password,
        confirmpw: action.password,
        nickname: action.nickname
      }
    case actions.CHANGE_ACCOUNT_INPUT:
      switch (action.key) {
        case 'email':
          return {
            ...nextState,
            email: action.value,
          }
        case 'password':
          return {
            ...nextState,
            password: action.value,
          }
        case 'confirmpw':
          return {
              ...nextState,
              confirmpw: action.value
          }
        case 'nickname':
          return {
              ...nextState,
              nickname: action.value
          }
        case 'publicStatus':
          if (action.value == 'Public') {
            return {
              ...nextState,
              publicStatus: 'True'
            }
          }
          else {
            return {
              ...nextState,
              publicStatus: 'False'
            }
          }
        default:
          return nextState
        }
    default:
      return nextState
  }
}

export default accountReducer
