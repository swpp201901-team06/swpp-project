import * as actions from './actions'
import sideBarReducer from './reducer'

describe('test sidebar reducer', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('initialize state with token unset', () => {
    const testAction = {
      type: 'UNDEFINED_ACTION',
    }
    const reducerOutput = sideBarReducer(undefined, testAction)
    const expectedOutput = {
      email: '',
      nickname: '',
      token: '',
      password: '',
      signInFailed: false,
      isLoggedIn: false,
    }
    expect(reducerOutput).toEqual(expectedOutput)
  })

  it('initialize state with token set', () => {
    const email = 'test-email@github.com'
    const nickname = 'some_nickname'
    const token = 'some_token'
    const password = 'some_password'
    localStorage.setItem('token', JSON.stringify(token))
    localStorage.setItem('nickname', JSON.stringify(nickname))
    localStorage.setItem('email', JSON.stringify(email))
    localStorage.setItem('password', JSON.stringify(password))
    const testAction = {
      type: 'UNDEFINED_ACTION',
    }
    const reducerOutput = sideBarReducer(undefined, testAction)
    const expectedOutput = {
      email,
      nickname,
      token,
      password,
      signInFailed: false,
      isLoggedIn: true,
    }
    expect(reducerOutput).toEqual(expectedOutput)
  })

  it('handle LOGOUT', () => {
    const email = 'test-email@github.com'
    const nickname = 'some_nickname'
    const token = 'some_token'
    const password = 'some_password'
    const signInFailed = false
    const isLoggedIn = true
    const testState = {
      email,
      nickname,
      token,
      password,
      signInFailed,
      isLoggedIn,
    }
    const testAction = actions.logOut()
    const reducerOutput = sideBarReducer(testState, testAction)
    const expectedOutput = {
      email: null,
      nickname: null,
      token: null,
      password: null,
      signInFailed: false,
      isLoggedIn: false,
    }
    expect(reducerOutput).toEqual(expectedOutput)
    expect(localStorage.hasOwnProperty('token')).not.toBeTruthy()
  })

  it('handle GOTO_ARCHIVE_BUTTON', () => {
    const email = 'test-email@github.com'
    const nickname = 'some_nickname'
    const token = 'some_token'
    const password = 'some_password'
    const signInFailed = true
    const isLoggedIn = false
    const testState = {
      email,
      nickname,
      token,
      password,
      signInFailed,
      isLoggedIn,
    }
    const testAction = actions.gotoArchiveButton(nickname)
    const reducerOutput = sideBarReducer(testState, testAction)
    expect(reducerOutput).toEqual(testState)
  })

  it('handle misc actions', () => {
    const email = 'test-email@github.com'
    const nickname = 'some_nickname'
    const token = 'some_token'
    const password = 'some_password'
    const signInFailed = true
    const isLoggedIn = false
    const testState = {
      email,
      nickname,
      token,
      password,
      signInFailed,
      isLoggedIn,
    }
    const testAction = {
      type: 'UNDEFINED_ACTION',
    }
    const reducerOutput = sideBarReducer(testState, testAction)
    expect(reducerOutput).toEqual(testState)
  })
})
