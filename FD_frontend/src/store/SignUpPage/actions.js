let nextTodoId = 0
export const EMAIL_CHECK_REQUEST = 'EMAIL_CHECK_REQUEST'
export const NICKNAME_CHECK_REQUEST = 'NICKNAME_CHECK_REQUEST'
export const SIGNUP_SUBMIT_REQUEST = 'SIGNUP_SUBMIT_REQUEST'

export const emailCheck = (email) => {
    return {
  type: EMAIL_CHECK_REQUEST,
  email
    }
}

export const nicknameCheck = (nickname) => {
    return {
  type: NICKNAME_CHECK_REQUEST,
  nickname
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
