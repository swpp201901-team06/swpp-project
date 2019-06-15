export const CHANGE_ACCOUNT_INPUT = 'CHANGE_ACCOUNT_INPUT'
export const EDIT_ACCOUNT_REQUEST = 'EDIT_ACCOUNT_REQUEST'
export const GET_ACCOUNT_SUCCESS = 'GET_ACCOUNT_SUCCESS'
export const GET_ACCOUNT_REQUEST = 'GET_ACCOUNT_REQUEST'

export const modifyAccount = (email, pw, confirmpw, nickname, publicStatus) => {
  return {
    type: EDIT_ACCOUNT_REQUEST,
    email,
    pw,
    confirmpw,
    nickname,
    publicStatus
  }
}

export const changeAccountInput = (key, value) => {
  return {
    type: CHANGE_ACCOUNT_INPUT,
    key,
    value
  }
}

export const getAccountSuccess = (username, email, password, publicStatus) => {
  return {
    type: GET_ACCOUNT_SUCCESS,
    username,
    email,
    publicStatus
  }
}

export const getAccount = (key) => {
  return {
    type: GET_ACCOUNT_REQUEST,
    key
  }
}
