export const initialState = {
  email: localStorage.hasOwnProperty('token') ? (
    JSON.parse(localStorage.getItem('email'))
  ) : '',
  nickname: localStorage.hasOwnProperty('token') ? (
    JSON.parse(localStorage.getItem('nickname'))
  ) : '',
  password: '',
  signInFailed: false,
  isLoggedIn: localStorage.hasOwnProperty('token') ? true : false,
  token: JSON.parse(localStorage.getItem('token')),
}
