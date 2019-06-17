export const LOGOUT = 'LOGOUT'
export const GOTO_ARCHIVE_BUTTON = 'GOTO_ARCHIVE_BUTTON'
export const GOTO_ACCOUNT_BUTTON = 'GOTO_ACCOUNT_BUTTON'

export const logOut = () => {
  return {
    type: LOGOUT,
  }
}

export const gotoArchiveButton = (nickname) => {
  return {
    type: GOTO_ARCHIVE_BUTTON,
    nickname,
  }
}

export const gotoAccountButton = (nickname) => {
  return {
    type: GOTO_ACCOUNT_BUTTON,
    nickname,
  }
}
