import { initialState } from './selectors'
import * as actions from '../actions'

import { takeEvery, all, take, put, call, fork } from 'redux-saga/effects'

const signUpReducer = (state = initialState, action) => {
  const dataType = action.key;

  switch(action.type) {
    case 'DUPLICATE_EXISTENCE':
      if(dataType == 'email'){
        return {
                ...state,
                emailText: 'Email is already in use.'
        }
      }
      else if(dataType == 'username'){
        return [
                ...state,
                {
                  usernameText: 'Username is already in use.'
                }
        ]
      }
    case 'DUPLICATE_NONEXISTENCE':
      if(dataType == 'email'){
        return {
                ...state,
                emailText: 'Email is free to use.'
        }
      }
      else if(dataType == 'username'){
        return [
                ...state,
                {
                  usernameText: 'Username is free to use.'
                }
        ]
      }
    default:
        return state
  }
}

export default signUpReducer
