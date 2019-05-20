import * as actions from './actions'
import signUpReducer from './reducer'
import { initialState } from './selectors'

describe('test signup reducer', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('initialize state', () => {
    const testState = undefined
    const testAction = {
      type: 'SOME_ACTION',
    }
    const reducerOutput = signUpReducer(testState, testAction)
    expect(reducerOutput).toEqual(initialState)
  })

  test('handle duplicate email case', () => {
    const testState = {
      emailText: 'some_email_text',
      usernameText: 'some_username_text',
    }
    const testAction = actions.duplicateFound('email')
    const reducerOutput = signUpReducer(testState, testAction)
    const expectedOutput = {
      emailText: 'Email is already in use.',
      usernameText: 'some_username_text',
    }
    expect(reducerOutput).toEqual(expectedOutput)
  })

  test('handle duplicate username case', () => {
    const testState = {
      emailText: 'some_email_text',
      usernameText: 'some_username_text',
    }
    const testAction = actions.duplicateFound('username')
    const reducerOutput = signUpReducer(testState, testAction)
    const expectedOutput = {
      emailText: 'some_email_text',
      usernameText: 'Username is already in use.',
    }
    expect(reducerOutput).toEqual(expectedOutput)
  })

  test('handle duplicate check request', () => {
    const testState = {
      emailText: 'some_email_text',
      usernameText: 'some_username_text',
    }
    const testAction = actions.duplicateCheck('email', 'some_val')
    const reducerOutput = signUpReducer(testState, testAction)
    expect(reducerOutput).toEqual(testState)
  })

  test('handle duplicate check request', () => {
    const testState = {
      emailText: 'some_email_text',
      usernameText: 'some_username_text',
    }
    const testAction = actions.duplicateCheck('email', 'some_val')
    const reducerOutput = signUpReducer(testState, testAction)
    expect(reducerOutput).toEqual(testState)
  })

  test('handle signup submit request', () => {
    const testState = {
      emailText: 'some_email_text',
      usernameText: 'some_username_text',
    }
    const testAction = actions.signUpSubmit(
      'test@github.com', 'some_pw', 'some_other_pw', 'some_nickname'
    )
    const reducerOutput = signUpReducer(testState, testAction)
    expect(reducerOutput).toEqual(testState)
  })
})
