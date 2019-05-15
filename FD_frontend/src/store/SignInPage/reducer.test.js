import * as actionTypes from './actionTypes'
import signInReducer from './reducer'

// require('jest-localstorage-mock')
var localStorageMock = (() => {
  setItem: (key, val) => Object.assign(localStorageMock, {[key]: val}),
})

describe('test signin reducer', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('initial state should get token from localStorage', () => {
    const testAction = {
      type: 'UNDEFINED_ACTION',
    }
    signInReducer(undefined, testAction)
    expect(localStorage.getItem).toHaveBeenCalledWith('token')
  })

  test('initialize state with token set', () => {
    const email = 'test-email@github.com'
    const nickname = 'some_nickname'
    const token = 'some_token'
    localStorage.setItem('token', token)
    localStorage.setItem('nickname', nickname)
    localStorage.setItem('email', email)
    console.log('reducer test 1')
    console.log(localStorage)
    const testAction = {
      type: 'UNDEFINED_ACTION',
    }
    const reducerOutput = signInReducer(undefined, testAction)
    const expectedOutput = {
      email,
      nickname,
      token,
      password: '',
      signInFailed: false,
      isLoggedIn: true,
    }
    expect(reducerOutput).toEqual(expectedOutput)
  })
})
