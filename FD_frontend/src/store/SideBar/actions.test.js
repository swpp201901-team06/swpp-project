import * as actions from './actions'

describe('test actions', () => {
  it('should create LOGOUT action', () => {
    const expectedAction1 = {
      type: LOGOUT,
    }

    expect(actions.logOut()).toEqual(expectedAction1)
  })
})
