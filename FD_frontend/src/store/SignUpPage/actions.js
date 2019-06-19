export const DUPLICATE_CHECK_REQUEST = 'DUPLICATE_CHECK_REQUEST'
export const SIGNUP_SUBMIT_REQUEST = 'SIGNUP_SUBMIT_REQUEST'
export const CHECK_DATA_SUCCESS = 'CHECK_DATA_SUCESS'
export const CHECK_DATA_FAILURE = 'CHECK_DATA_FAILURE'
export const HANDLE_CHANGE = 'HANDLE_CHANGE'
export const DUPLICATE_EXISTENCE = 'DUPLICATE_EXISTENCE'
export const DUPLICATE_NONEXISTENCE = 'DUPLICATE_NONEXISTENCE'
export const PHONE_DUPLICATE = 'PHONE_DUPLICATE'
export const PHONE_SENT = 'PHONE_SENT'
export const PHONE_AUTH_FAILED = 'PHONE_AUTH_FAILED'
export const PHONE_FAIL = 'PHONE_FAIL'
export const PHONE_REQUEST = 'PHONE_REQUEST'
export const PHONE_AUTH_REQUEST = 'PHONE_AUTH_REQUEST'
export const PHONE_AUTH_SUCCESS = 'PHONE_AUTH_SUCCESS'
export const MUST_AUTH = 'MUST_AUTH'
export const SIGNUP_FAILED = 'SIGNUP_FAILED'
export const CANCEL_SIGNUP = 'CANCEL_SIGNUP'

export const duplicateCheck = (key, value) => {
  return {
    type: DUPLICATE_CHECK_REQUEST,
    key,
    value,
  }
}

export const signUpSubmit = (email, pw, confirmpw, nickname, phoneNumber) => {
  return {
    type: SIGNUP_SUBMIT_REQUEST,
    email,
    pw,
    confirmpw,
    nickname,
    phoneNumber
  }
}

export const noDuplicateFound = (key) => {
  return {
    type: DUPLICATE_NONEXISTENCE,
    key,
  }
}

export const duplicateFound = (key) => {
  return {
    type: DUPLICATE_EXISTENCE,
    key,
  }
}

export const phoneDuplicate = () => {
  return {
    type: PHONE_DUPLICATE,
  }
}

export const phoneSent = (code) => {
  return {
    type: PHONE_SENT,
    code
  }
}

export const phoneAuthSuccess = (phoneNumber) => {
  return {
    type: PHONE_AUTH_SUCCESS,
    phoneNumber
  }
}

export const phoneAuthFailed = () => {
  return {
    type: PHONE_AUTH_FAILED,
  }
}

export const phoneFail = () => {
  return {
    type: PHONE_FAIL,
  }
}

export const phoneRequest = (number) => {
  return {
    type: PHONE_REQUEST,
    number
  }
}

export const phoneAuthRequest = (input, code, phoneNumber) => {
  return {
    type: PHONE_AUTH_REQUEST,
    input,
    code,
    phoneNumber
  }
}

export const mustPhoneAuth = () => {
  return {
    type: MUST_AUTH,
  }
}

export const signUpFailed = () => {
  return {
    type: SIGNUP_FAILED,
  }
}

export const cancelSignUp = () => {
  return {
    type: CANCEL_SIGNUP,
  }
}
