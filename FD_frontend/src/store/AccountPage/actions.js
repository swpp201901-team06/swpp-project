export const CHANGE_ACCOUNT_INPUT = 'CHANGE_ACCOUNT_INPUT'
export const MODIFY_ACCOUNT_INFO_REQUEST = 'MODIFY_ACCOUNT_INFO_REQUEST'
export const MODIFY_PASSWORD_REQUEST = 'MODIFY_PASSWORD_REQUEST'
export const GET_ACCOUNT_SUCCESS = 'GET_ACCOUNT_SUCCESS'
export const GET_ACCOUNT_REQUEST = 'GET_ACCOUNT_REQUEST'

export const modifyAccountInfo = (nickname, publicStatus) => {
  return {
    type: MODIFY_ACCOUNT_INFO_REQUEST,
    nickname,
    publicStatus
  }
}

export const modifyPassword = (pw, confirmpw) => {
  return {
    type: MODIFY_PASSWORD_REQUEST,
    pw,
    confirmpw
  }
}

export const changeAccountInput = (key, value) => {
  return {
    type: CHANGE_ACCOUNT_INPUT,
    key,
    value
  }
}

export const getAccountSuccess = (username, password, public_status) => {
  return {
    type: GET_ACCOUNT_SUCCESS,
    username,
    password,
    public_status
  }
}

export const getAccount = () => {
  return {
    type: GET_ACCOUNT_REQUEST
  }
}
