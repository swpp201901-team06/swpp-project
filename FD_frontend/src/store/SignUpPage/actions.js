export const DUPLICATE_CHECK_REQUEST = 'DUPLICATE_CHECK_REQUEST'
export const SIGNUP_SUBMIT_REQUEST = 'SIGNUP_SUBMIT_REQUEST'
export const CHECK_DATA_SUCCESS = 'CHECK_DATA_SUCESS'
export const CHECK_DATA_FAILURE = 'CHECK_DATA_FAILURE'

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
