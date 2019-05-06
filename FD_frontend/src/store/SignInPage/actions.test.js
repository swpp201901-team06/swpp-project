import * as actions from './actions'
import * as actionTypes from './actionTypes'

describe('test actions', () => {
  test ('should create GOTO_SIGN_UP action', () => {
    const expectedAction = {
      type: actionTypes.GOTO_SIGN_UP,
    }
    expect(actions.gotoSignUp()).toEqual(expectedAction)
  })

  test ('should create GOTO_SIGN_UP action', () => {
    const email = 'test-email@github.com'
    const password = 'some_password'
    const expectedAction = {
      type: actionTypes.REQUEST_SIGN_IN,
      email: email,
      password: password,
    }
    expect(actions.requestSignIn(email, password)).toEqual(expectedAction)
  })

  test ('should create SIGN_IN_FAILED action', () => {
    const expectedAction = {
      type: actionTypes.SIGN_IN_FAILED,
    }
    expect(actions.signInFailed()).toEqual(expectedAction)
  })

  test ('should create SIGN_IN_SUCCESS action', () => {
    const email = 'test-email@github.com'
    const nickname = 'some_nickname'
    const token = 'some_token'
    const expectedAction = {
      type: actionTypes.SIGN_IN_SUCCESS,
      email: email,
      nickname: nickname,
      token: token,
    }
    expect(actions.signInSuccess(token, email, nickname)).toEqual(expectedAction)
  })
})
