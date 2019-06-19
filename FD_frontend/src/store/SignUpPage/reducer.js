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
        phoneAuthText: 'Success! Authorized to '+action.phoneNumber,
        confirmedNumber: action.phoneNumber
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
        phoneAuth: 'True',
        code: action.code
      }  
    case actions.MUST_AUTH:
      return {
        ...state,
        phoneSendText: 'Please write down the authorization code sent to your phone below.',
        phoneAuth: 'True',
        code: action.code,
        failText: 'You must do phone authentication before signing up.'
      }
    case actions.SIGNUP_FAILED:
      return {
        ...state,
        failText: 'Sign Up Failed.'
      }
    case actions.CANCEL_SIGNUP:
      return initialState
    default:
      return state
  }
}

export default signUpReducer
