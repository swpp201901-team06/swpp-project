import * as actions from './actions'
import signInReducer from './reducer'


describe('test signin reducer', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('initialize state with token unset', () => {
    const testAction = {
      type: 'UNDEFINED_ACTION',
    }
    const reducerOutput = signInReducer(undefined, testAction)
    const expectedOutput = {
      email: null,
      nickname: null,
      token: null,
      password: null,
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
    const reducerOutput = signInReducer(undefined, testAction)
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

  it('handle GOTO_SIGN_UP', () => {
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
    const testAction = actions.gotoSignUp()
    const reducerOutput = signInReducer(testState, testAction)
    expect(reducerOutput).toEqual(testState)
  })

  it('handle REQUEST_SIGN_IN', () => {
    const email = 'test-email@github.com'
    const nickname = 'some_nickname'
    const token = ''
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
    const email2 = 'test-email2@github.com'
    const password2 = 'some_password2'
    const testAction = actions.requestSignIn(email2, password2)
    const reducerOutput = signInReducer(testState, testAction)
    expect(reducerOutput).toEqual(testState)
  })

  it('handle SIGN_IN_SUCCESS', () => {
    const email = 'test-email@github.com'
    const nickname = 'some_nickname'
    const token = ''
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
    const token2 = 'some_token'
    const email2 = 'test-email2@github.com'
    const password2 = 'some_password2'
    const nickname2 = 'some_nickname2'
    const testAction = actions.signInSuccess(token2, email2, password2, nickname2)
    const reducerOutput = signInReducer(testState, testAction)
    const expectedOutput = {
      email: email2,
      nickname: nickname2,
      token: token2,
      password: password2,
      signInFailed: false,
      isLoggedIn: true,
    }
    expect(reducerOutput).toEqual(expectedOutput)
  })

  it('handle SIGN_IN_FAILED', () => {
    const email = 'test-email@github.com'
    const nickname = 'some_nickname'
    const token = ''
    const password = 'some_password'
    const signInFailed = false
    const isLoggedIn = false
    const testState = {
      email,
      nickname,
      token,
      password,
      signInFailed,
      isLoggedIn,
    }
    const testAction = actions.signInFailed()
    const reducerOutput = signInReducer(testState, testAction)
    const expectedOutput = {
      email,
      nickname,
      token,
      password,
      signInFailed: true,
      isLoggedIn: false,
    }
    expect(reducerOutput).toEqual(expectedOutput)
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
    const reducerOutput = signInReducer(testState, testAction)
    expect(reducerOutput).toEqual(testState)
  })
})
