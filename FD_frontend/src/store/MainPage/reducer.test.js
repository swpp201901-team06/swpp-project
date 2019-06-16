import * as actions from './actions'
import mainReducer from './reducer'
import { initialState } from './selectors'

describe('test main reducer', () => {
  it('initialize state', () => {
    const testAction = {
      type: 'UNDEFINED_ACTION',
    }
    const reducerOutput = mainReducer(undefined, testAction)
    const expectedOutput = initialState
    expect(reducerOutput).toEqual(expectedOutput)
  })

  it('handle some unknown action', () => {
    const testAction = {
      type: 'UNDEFINED_ACTION',
    }
    const state = []
    const reducerOutput = mainReducer(state, testAction)
    const expectedOutput = state
    expect(reducerOutput).toEqual(expectedOutput)
  })

  it('handle GOTO_SIGN_IN', () => {
    const testAction = {
      type: actions.GOTO_SIGN_IN,
    }
    const state = []
    const reducerOutput = mainReducer(state, testAction)
    const expectedOutput = state
    expect(reducerOutput).toEqual(expectedOutput)
  })

  it('handle GOTO_GUEST', () => {
    const testAction = {
      type: actions.GOTO_GUEST,
    }
    const state = []
    const reducerOutput = mainReducer(state, testAction)
    const expectedOutput = state
    expect(reducerOutput).toEqual(expectedOutput)
  })
})