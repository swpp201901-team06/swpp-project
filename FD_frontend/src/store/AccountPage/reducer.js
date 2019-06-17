import * as actions from './actions'

const accountReducer = (state=[], action) => {
  let nextState = state
  switch(action.type) {
    case actions.GET_ACCOUNT_SUCCESS:
      return {
        ...nextState,
        password: action.password,
        confirmpw: action.password,
        nickname: action.username,
        publicStatus: action.public_status
      }
    case actions.CHANGE_ACCOUNT_INPUT:
      switch (action.key) {
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
              publicStatus: true
            }
          }
          else {
            return {
              ...nextState,
              publicStatus: false
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
