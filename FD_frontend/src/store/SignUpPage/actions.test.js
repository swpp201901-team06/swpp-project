import * as actions from './actions'

describe('test actions', () => {
  it('should create DUPLICATE_CHECK_REQUEST action', () => {
    const key1 = 'email'
    const key2 = 'username'
    const val1 = 'testing@testing.com'
    const val2 = 'TESTING'
    const expectedAction1 = {
      type: actions.DUPLICATE_CHECK_REQUEST,
      key: key1,
      value: val1
    }
    const expectedAction2 = {
      type: actions.DUPLICATE_CHECK_REQUEST,
      key: key2,
      value: val2
    }

    expect(actions.duplicateCheck(key1,val1)).toEqual(expectedAction1)
    expect(actions.duplicateCheck(key2,val2)).toEqual(expectedAction2)
  })
  it('should create SIGNUP_SUBMIT_REQUEST action', () => {
    const email = 'testing@testing.com'
    const pw = 'abcdtest1234'
    const confirmpw = 'abcdtest1234'
    const nickname = 'TESTING'
    const expectedAction = {
      type: actions.SIGNUP_SUBMIT_REQUEST,
      email: email,
      pw: pw,
      confirmpw: confirmpw,
      nickname: nickname
    }
    expect(actions.signUpSubmit(email,pw,confirmpw,nickname)).toEqual(expectedAction)
  })

  it('should create DUPLICATE_EXISTENCE action', () => {
    const key1='email'
    const key2='username'
    const expectedAction1 = {
      type: actions.DUPLICATE_EXISTENCE,
      key: key1
    }
    const expectedAction2 = {
      type: actions.DUPLICATE_EXISTENCE,
      key: key2
    }
    expect(actions.duplicateFound(key1)).toEqual(expectedAction1)
    expect(actions.duplicateFound(key2)).toEqual(expectedAction2)
  })

  it('should create DUPLICATE_NONEXISTENCE action', () => {
    const key1='email'
    const key2='username'
    const expectedAction1 = {
      type: actions.DUPLICATE_NONEXISTENCE,
      key: key1
    }
    const expectedAction2 = {
      type: actions.DUPLICATE_NONEXISTENCE,
      key: key2
    }
    expect(actions.noDuplicateFound(key1)).toEqual(expectedAction1)
    expect(actions.noDuplicateFound(key2)).toEqual(expectedAction2)
  })
})
