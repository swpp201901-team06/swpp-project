import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import SignInButton from '../../atoms/SignInButton/index'
import SignUpButton from '../../atoms/SignUpButton/index'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const SignIn = ({onClickSignUp, onClickSignIn}) => {
  console.log("components/pages/SignInPage/molecules/SignIn/index 1")
  let idField
  let passwordField

  const onClickSignUpButton = () => {
    onClickSignUp()
  }

  const onClickSignInButton = () => {
    if (idField !== undefined && idField.value !== '' &&
      passwordField !== undefined && passwordField.value !== '') {

      onClickSignIn(idField.value, passwordField.value)
    }
  }

  return (
    <div>
      ID
      <input ref={node => {idField}}/>
      <br/>
      Password
      <input ref={node => {passwordField}}/>
      <br/>
      <SignUpButton type="submit" onClick={onClickSignUpButton}>(Sign Up)</SignUpButton>
      <SignInButton type="submit" onClick={onClickSignInButton}>(Sign In)</SignInButton>
    </div>
  )
}

SignIn.propTypes = {
  reverse: PropTypes.bool,
}

export default SignIn
