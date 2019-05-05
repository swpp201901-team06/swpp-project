export const DUPLICATE_CHECK_REQUEST = 'DUPLICATE_CHECK_REQUEST'
export const SIGNUP_SUBMIT_REQUEST = 'SIGNUP_SUBMIT_REQUEST'
export const CHECK_DATA_SUCCESS = 'CHECK_DATA_SUCESS'
export const CHECK_DATA_FAILURE = 'CHECK_DATA_FAILURE'
export const HANDLE_CHANGE = 'HANDLE_CHANGE'
export const DUPLICATE_EXISTENCE = 'DUPLICATE_EXISTENCE'
export const DUPLICATE_NONEXISTENCE = 'DUPLICATE_NONEXISTENCE'

export const duplicateCheck = (key, value) => {
    return {
  type: DUPLICATE_CHECK_REQUEST,
  key,
  value
    }
}

export const signUpSubmit = (email, pw, confirmpw, nickname) => {
    return {
  type: SIGNUP_SUBMIT_REQUEST,
    email,
    pw,
    confirmpw,
    nickname
    }
}

export const handleChange = (key, value) => {
  return {
    type: HANDLE_CHANGE,
    key,
    value
  }
}

export const checkDataSuccess = user => {
    return {
      type: CHECK_DATA_SUCCESS,
      payload: user,
    }
}

export const checkDataFailure = err => {
    return {
      type: CHECK_DATA_FAILURE,
      payload: err,
      error: true,
    }
}

export const noDuplicateFound = (key) => {
  return {
    type: DUPLICATE_NONEXISTENCE,
    key
  }
}

export const duplicateFound = (key) => {
  return {
    type: DUPLICATE_EXISTENCE,
    key
  }
}
