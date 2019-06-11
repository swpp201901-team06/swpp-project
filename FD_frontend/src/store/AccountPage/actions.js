export const CHANGE_ACCOUNT_INPUT = 'CHANGE_ACCOUNT_INPUT'
export const EDIT_ACCOUNT_REQUEST = 'EDIT_ACCOUNT_REQUEST'
export const GET_ACCOUNT_SUCCESS = 'GET_ACCOUNT_SUCCESS'

export const modifyAccount = (email, pw, confirmpw, nickname) => {
  return {
    type: EDIT_ACCOUNT_REQUEST,
    email,
    pw,
    confirmpw,
    nickname
  }
}

export const changeAccountInput = (key, value) => {
  return {
    type: CHANGE_ACCOUNT_INPUT,
    key,
    value
  }
}

export const getAccountSuccess = () => {
  return {
    type: GET_ACCOUNT_SUCCESS,
  }
}
