export const initialState = {
  email: '',
  password: '',
  signInFailed: false,
  isLoggedIn: localStorage.hasOwnProperty('token') ? true : false,
  token: JSON.parse(localStorage.getItem('user'))
}
