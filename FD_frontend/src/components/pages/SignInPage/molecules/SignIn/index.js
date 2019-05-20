import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import SignInButton from '../../atoms/SignInButton/index'
import SignUpButton from '../../atoms/SignUpButton/index'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const SignIn = ({ isLoggedIn, signInFailed, nickname,
                  onClickSignUp, onClickSignIn, dispatchGotoArchive }) => {
  let emailField
  let passwordField

  const onClickSignUpButton = () => {
    onClickSignUp()
  }

  const onClickSignInButton = () => {
    if (emailField !== undefined && emailField.value !== '' &&
      passwordField !== undefined && passwordField.value !== '') {

      onClickSignIn(emailField.value, passwordField.value)
    } else if (emailField === undefined || emailField.value === '') {
      alert('Please enter your email address.')
    } else if (passwordField === undefined || passwordField.value === '') {
      alert('Please enter your password.')
    }
  }
  if (isLoggedIn) {
    dispatchGotoArchive(nickname)
    return (<div />)
  }
  // TODO: use `SignInButton` and `SignUpButton` instead of `button`
  return (
    <div>
      Email address
      <input ref={node => { emailField = node }} />
      <br />
      Password
      <input ref={node => { passwordField = node }} />
      <br />
      <button type="submit" onClick={onClickSignUpButton}>Sign Up</button>
      <button type="submit" onClick={onClickSignInButton}>Sign In</button>
      <br />
      {signInFailed ? 'Sign in Failed' : ''}
    </div>
  )
}

SignIn.propTypes = {
  reverse: PropTypes.bool,
}

export default SignIn
