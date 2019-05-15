import * as actions from './actions'
import signInReducer from './reducer'


describe('test signin reducer', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('initialize state with token unset', () => {
    const testAction = {
      type: 'UNDEFINED_ACTION',
    }
    const reducerOutput = signInReducer(undefined, testAction)
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

  test('initialize state with token set', () => {
    const email = 'test-email@github.com'
    const nickname = 'some_nickname'
    const token = 'some_token'
    localStorage.setItem('token', token)
    localStorage.setItem('nickname', nickname)
    localStorage.setItem('email', email)
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

  test('handle GOTO_SIGN_UP', () => {
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

  test('handle REQUEST_SIGN_IN', () => {
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

  test('handle SIGN_IN_SUCCESS', () => {
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
    const nickname2 = 'some_nickname2'
    const testAction = actions.signInSuccess(token2, email2, nickname2)
    const reducerOutput = signInReducer(testState, testAction)
    const expectedOutput = {
      email: email2,
      nickname: nickname2,
      token: token2,
      password,
      signInFailed: false,
      isLoggedIn: true,
    }
    expect(reducerOutput).toEqual(expectedOutput)
  })

  test('handle SIGN_IN_FAILED', () => {
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

  test('handle misc actions', () => {
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
