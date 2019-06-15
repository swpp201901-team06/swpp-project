export const GOTO_SIGN_IN = 'GOTO_SIGN_IN'
export const GOTO_GUEST = 'GOTO_GUEST'

export const gotoSignIn = () => {
  return {
    type: GOTO_SIGN_IN,
  }
}

export const gotoGuest = () => {
  return {
    type: GOTO_GUEST,
  }
}