import * as actions from './actions'

describe('test MainPage actions', () => {
  it('should create GOTO_SIGN_IN action', () => {
    const expectedAction = {
      type: actions.GOTO_SIGN_IN,
    }
    expect(actions.gotoSignIn()).toEqual(expectedAction)
  })

  it('should create GOTO_GUEST action', () => {
    const expectedAction = {
      type: actions.GOTO_GUEST,
    }
    expect(actions.gotoGuest()).toEqual(expectedAction)
  })
})