export const gotoSignUp = () => {
  console.log("store/SignInPage/actions gotoSignUp 1")
  return {
    type: 'GOTO_SIGN_UP',
  }
}

export const requestSignIn = (email, password) => {
  console.log("store/SignInPage/actions requestSignIn 1")
  console.log(email)
  console.log(password)
  console.log("store/SignInPage/actions requestSignIn 2")
  return {
    type: 'REQUEST_SIGN_IN',
    email: email,
    password: password,
  }
}

export const signInFailed = () => {
  console.log("store/SignInPage/actions signInFailed 1")
  return {
    return: 'SIGN_IN_FAILED',
  }
}

export const signInSuccess = (token) => {
  console.log("store/SignInPage/actions signInSuccess 1")
  console.log(token)
  console.log("store/SignInPage/actions signInSuccess 2")
  return {
    type: 'SIGN_IN_SUCCESS',
    token: token,
  }
}
