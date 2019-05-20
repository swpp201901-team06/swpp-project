import { initialState } from './selectors'
import * as actions from './actions'

const signUpReducer = (state = initialState, action) => {
  console.log('sign up reducer file')
  console.log(action)
  console.log(action.key)
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
      console.log('sign up reducer duplicate nonexistence')
      if (dataType === 'email') {
        console.log('not duplicate email')
        return {
          ...state,
          emailText: 'Email is free to use.',
        }
      } else if (dataType === 'username') {
        console.log('not duplicate password')
        return {
          ...state,
          usernameText: 'Username is free to use.',
        }
      }
      return state
    default:
      return state
  }
}

export default signUpReducer
