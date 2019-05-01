export const gotoSignUp = () => {
  return {
    type: 'GOTO_SIGN_UP',
  }
}

export const requestSignIn = (id, password) => {
  return {
    type: 'REQUEST_SIGN_IN',
    id: id,
    password: password,
  }
}

export const signInFailed = () => {
  return {
    return: 'SIGN_IN_FAILED',
  }
}

export const signInSuccess = () => {
  return {
    type: 'SIGN_IN_SUCCESS',
  }
}
