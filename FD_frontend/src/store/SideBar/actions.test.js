import * as actions from './actions'

describe('test side bar actions', () => {
  it('should create LOGOUT action', () => {
    const expectedAction = {
      type: actions.LOGOUT,
    }

    expect(actions.logOut()).toEqual(expectedAction)
  })

  it('should create GOTO_ARCHIVE_BUTTON action', () => {
    const nickname = 'test_nickname'
    const expectedAction = {
      type: actions.GOTO_ARCHIVE_BUTTON,
      nickname,
    }

    expect(actions.gotoArchiveButton(nickname)).toEqual(expectedAction)
  })
})
