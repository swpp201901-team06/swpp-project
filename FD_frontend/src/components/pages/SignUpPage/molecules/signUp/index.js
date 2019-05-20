import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import Button from '../../atoms/Button'
import DCButton from '../../atoms/DCButton'
import SubmitButton from '../../atoms/SubmitButton'
import { debounce } from 'lodash'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

export const signUp = ({ statefunction, onDuplicateCheck, onSignUpSubmit, handleChange }) => {
    let email;
    let pw;
    let confirmpw;
    let nickname;
    let emailText;
    let usernameText;

    if(statefunction.SignUpPage.emailText) {
      emailText = statefunction.SignUpPage.emailText;
    }
    else{
      emailText = '';
    }
    if(statefunction.SignUpPage.usernameText) {
      usernameText = statefunction.SignUpPage.usernameText;
    }
    else{
      usernameText = '';
    }

    const onECheck = () => {
      onDuplicateCheck('email', email.value);
    };
    const onNCheck = () => {
      onDuplicateCheck('username', nickname.value);
    };
    const onSubmit = () => {
      onSignUpSubmit(email.value, pw.value, confirmpw.value, nickname.value); 
    };
    const handleEmailChange = debounce(() => {
      if(email.value){
        handleChange('email', email.value);
      }
    }, 300);
    const handleNicknameChange = debounce(() => {
      if(nickname.value){
        handleChange('username', nickname.value);
      }
    }, 300);

  return (
    <div>
      <h4>Email{' '} 
      <input ref={node => {email = node;}} onChange={handleEmailChange}/>{'  '}
      <DCButton type="submit" onClick={onECheck}>Email Check</DCButton> {' '}{emailText}</h4>
      <h4>Password{' '}
      <input ref={node => {pw = node;}} /></h4>
      <h4>Confirm Password{' '}
      <input ref={node => {confirmpw = node;}} /></h4>
      <h4>Nickname{' '}
      <input ref={node => {nickname = node;}} onChange={handleNicknameChange}/>{'  '}
      <DCButton type="submit" onClick={onNCheck}>Nickname Check</DCButton>{' '}{usernameText}</h4>
      <h4>
      <SubmitButton type="submit" onClick={onSubmit}>Submit</SubmitButton></h4>
    </div>
  );
};

signUp.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

signUp.defaultProps = {
  emailMessage: '',
  usernameMessage: ''
}

/*export default signUp*/
