export const initialState = {
  email: '',
  nickname: '',
  password: '',
  signInFailed: false,
  isLoggedIn: localStorage.hasOwnProperty('token') ? true : false,
  token: JSON.parse(localStorage.getItem('user'))
}
