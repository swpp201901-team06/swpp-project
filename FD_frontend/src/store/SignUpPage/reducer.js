import { initialState } from './selectors'
import * as actions from './actions'

const signUpReducer = (state = initialState, action) => {
  const dataType = action.key

  switch (action.type) {
    case actions.DUPLICATE_EXISTENCE:
      if (dataType === 'email') {
        return {
          ...state,
          emailText: 'Email is already in use.',
        }
      } else if (dataType === 'username') {
        return {
          ...state,
          usernameText: 'Username is already in use.',
        }
      }
      return state
    case actions.DUPLICATE_NONEXISTENCE:
      if (dataType === 'email') {
        return {
          ...state,
          emailText: 'Email is free to use.',
        }
      } else if (dataType === 'username') {
        return {
          ...state,
          usernameText: 'Username is free to use.',
        }
      }
      return state
    case actions.PHONE_AUTH_FAILED:
      return {
        ...state,
        phoneAuthText: 'Authorization failed.'
      }
    case actions.PHONE_AUTH_SUCCESS:
      return {
        ...state,
        phoneAuthText: 'Success!'
      }
    case actions.PHONE_DUPLICATE:
      return {
        ...state,
        phoneSendText: 'This number already exists.'
      }
    case actions.PHONE_FAIL:
      return {
        ...state,
        phoneSendText: 'Failed to send authorization code. Please try again.'
      }
    case actions.PHONE_SENT:
      return {
        ...state,
        phoneSendText: 'Please write down the authorization code sent to your phone below.',
        phoneAuth: 'True'
      }  
    default:
      return state
  }
}

export default signUpReducer
