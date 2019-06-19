import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router' 
// import { font, palette } from 'styled-theme'
// import Button from '../../atoms/Button'
// import DCButton from '../../atoms/DCButton'
import SubmitButton from '../../atoms/SubmitButton'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`
const browncolor = {
  color: '#e0ba7c',
}

export const signUp = ({ statefunction, onDuplicateCheck, onSignUpSubmit, handleChange, onPhoneAuthRequest, onPhoneAuthSubmit }) => {
  let email
  let pw
  let confirmpw
  let nickname
  let phoneNumber
  let inputCode
  let emailText
  let usernameText
  let phoneText
  let phoneAuthText
  let failText
  let confirmedNumber

  if (statefunction.SignUpPage.emailText) {
    emailText = statefunction.SignUpPage.emailText
  } else {
    emailText = ''
  }

  if (statefunction.SignUpPage.usernameText) {
    usernameText = statefunction.SignUpPage.usernameText
  } else {
    usernameText = ''
  }
  
  if (statefunction.SignUpPage.phoneSendText) {
    phoneText = statefunction.SignUpPage.phoneSendText
  } else {
    phoneText = ''
  }
  
  if (statefunction.SignUpPage.phoneAuthText) {
    phoneAuthText = statefunction.SignUpPage.phoneAuthText
  } else {
    phoneAuthText = ''
  }
  
  if (statefunction.SignUpPage.failText) {
    failText = statefunction.SignUpPage.failText
  } else {
    failText = ''
  }
  
  if (statefunction.SignUpPage.confirmedNumber) {
    confirmedNumber = statefunction.SignUpPage.confirmedNumber
  } else {
    confirmedNumber = ''
  }

  // const onECheck = () => {
  //   onDuplicateCheck('email', email.value)
  // }
  // const onNCheck = () => {
  //   onDuplicateCheck('username', nickname.value)
  // }
  const onSubmit = () => {
    onSignUpSubmit(email.value, pw.value, confirmpw.value, nickname.value, confirmedNumber)
  }
  const handleEmailChange = () => {
    if (email.value) {
      setTimeout(() => { handleChange('email', email.value) }, 300)
    }
  }
  const handleNicknameChange = () => {
    if (nickname.value) {
      setTimeout(() => { handleChange('username', nickname.value) }, 300)
    }
  }
  const onSend = () => {
    onPhoneAuthRequest(phoneNumber.value)
  }
  const onAuthorize = () => {
    console.log(phoneNumber.value)
    onPhoneAuthSubmit(inputCode.value, statefunction.SignUpPage.code, phoneNumber.value)
  }

  let phoneAuthComponent
  
  if(statefunction.SignUpPage.phoneAuth == 'True'){
    console.log(statefunction.SignUpPage.code)
    phoneAuthComponent = (
      <div>
        <h4 style={browncolor}>
          Authorization Code
          {' '}
          <input ref={node => { inputCode = node }} />
          {' '}
          <SubmitButton type="submit" onClick={onAuthorize}>
            Authorize
          </SubmitButton>
          {'     '}
          {phoneAuthText}
        </h4>
        
      </div>
    )
  }
  else {
    phoneAuthComponent = ''
  }
      

  return (
    <div>
      <Wrapper>
        <h4 style={browncolor}>
          Email
          {' '}
          <input ref={node => { email = node }} onChange={handleEmailChange} />
          {'     '}
          {emailText}
        </h4>
        <h4 style={browncolor}>
          Phone number(without '-')
          {' '}
          <input ref={node => { phoneNumber = node }} />
          {' '}
          <SubmitButton type="submit" onClick={onSend}>
            Send/Resend
          </SubmitButton>
          {'     '}
          {phoneText}
        </h4>
        {phoneAuthComponent}
        <h4 style={browncolor}>
          Password
          {' '}
          <input type="password" ref={node => { pw = node }} />
        </h4>

        <h4 style={browncolor}>
          Confirm Password
          {' '}
          <input type="password" ref={node => { confirmpw = node }} />
        </h4>

        <h4 style={browncolor}>
          Nickname
          {' '}
          <input ref={node => { nickname = node }} onChange={handleNicknameChange} />
          {'     '}
          {usernameText}
        </h4>

        <h4 style={browncolor}>
          <SubmitButton type="submit" onClick={onSubmit}>
            Submit
          </SubmitButton>
	        <Link to="/signin">
		        <SubmitButton>Cancel</SubmitButton>
	        </Link>
        </h4>
        
       <h4 style={browncolor}>
          {failText}
       </h4>
      </Wrapper>
    </div>
  )
}

/* <DCButton type="submit" onClick={onECheck}>Email Check</DCButton> {' '}{emailText}
<DCButton type="submit" onClick={onNCheck}>Nickname Check</DCButton>{' '}{usernameText} */
signUp.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

signUp.defaultProps = {
  emailMessage: '',
  usernameMessage: '',
}

/* export default signUp */
