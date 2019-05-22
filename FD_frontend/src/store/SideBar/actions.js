export const LOGOUT = 'LOGOUT'
export const GOTO_ARCHIVE_BUTTON = 'GOTO_ARCHIVE_BUTTON'

export const logOut = () => {
  return {
    type: LOGOUT,
  }
}

export const gotoArchiveButton = () => {
  return {
    type: GOTO_ARCHIVE_BUTTON,
  }
}
