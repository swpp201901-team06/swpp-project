import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import SignInButton from '../../atoms/SignInButton/index'
import SignUpButton from '../../atoms/SignUpButton/index'
import {baseHistory} from '../../../../../index'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const SignIn = ({isLoggedIn, signInFailed, onClickSignUp, onClickSignIn}) => {
  console.log("components/pages/SignInPage/molecules/SignIn/index SignIn 1")
  console.log(isLoggedIn)
  console.log(signInFailed)
  console.log(onClickSignUp)
  console.log(onClickSignIn)
  console.log("components/pages/SignInPage/molecules/SignIn/index SignIn 2")
  let emailField
  let passwordField

  const onClickSignUpButton = () => {
    console.log("components/pages/SignInPage/molecules/SignIn/index SignIn onClickSignUpButton 1")
    baseHistory.push('/signup')
    onClickSignUp()
  }

  const onClickSignInButton = () => {
    console.log("components/pages/SignInPage/molecules/SignIn/index SignIn onClickSignInButton 1")
    console.log(emailField)
    console.log(emailField.value)
    console.log(passwordField)
    console.log(passwordField.value)
    console.log("components/pages/SignInPage/molecules/SignIn/index SignIn onClickSignInButton 2")
    if (emailField !== undefined && emailField.value !== '' &&
      passwordField !== undefined && passwordField.value !== '') {

      console.log("components/pages/SignInPage/molecules/SignIn/index SignIn onClickSignInButton 3")
      onClickSignIn(emailField.value, passwordField.value)
    }
  }

  console.log("components/pages/SignInPage/molecules/SignIn/index SignIn 3")
  if (isLoggedIn) {
    console.log("components/pages/SignInPage/molecules/SignIn/index SignIn 3.1")
    baseHistory.push('/signup') // TODO: must redirect to archivepage
    return (<div/>)
  }
  console.log("components/pages/SignInPage/molecules/SignIn/index SignIn 3.2")
  return (
    <div>
      Email address
      <input ref={node => {
        console.log("components/pages/SignInPage/molecules/SignIn/index SignIn 4")
        console.log(node)
        console.log("components/pages/SignInPage/molecules/SignIn/index SignIn 5")
        emailField = node
      }}/>
      <br/>
      Password
      <input ref={node => {
        console.log("components/pages/SignInPage/molecules/SignIn/index SignIn 6")
        console.log(node)
        console.log("components/pages/SignInPage/molecules/SignIn/index SignIn 7")
        passwordField = node
      }}/>
      <br/>
      <SignUpButton type="submit" onClick={onClickSignUpButton}>(Sign Up)</SignUpButton>
      <SignInButton type="submit" onClick={onClickSignInButton}>(Sign In)</SignInButton>
      <br />
      {signInFailed ? 'Sign in Failed' : ''}
    </div>
  )
}

SignIn.propTypes = {
  reverse: PropTypes.bool,
}

export default SignIn
