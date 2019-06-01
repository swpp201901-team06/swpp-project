import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
// import Button from '../../atoms/Button'
// import DCButton from '../../atoms/DCButton'
import SubmitButton from '../../atoms/SubmitButton'
import { debounce } from 'lodash'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`
const browncolor = {
  color: "#e0ba7c",
};
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
      <Wrapper>
        <h4 style={browncolor}>Email{' '} 
          <input ref={node => {email = node;}} onChange={handleEmailChange}/>{'  '}
          {'   '}{emailText}
        </h4>

        <h4 style={browncolor}>Password{' '}
          <input type="password" ref={node => {pw = node;}} />
        </h4>

        <h4 style={browncolor}>Confirm Password{' '}
          <input type="password" ref={node => {confirmpw = node;}} />
        </h4>

        <h4 style={browncolor}>Nickname{' '}
          <input ref={node => {nickname = node;}} onChange={handleNicknameChange}/>{'  '}
          {'   '}{usernameText} 
        </h4>

        <h4 style={browncolor}>
          <SubmitButton type="submit" onClick={onSubmit}>Submit</SubmitButton>
        </h4>
      </Wrapper>
    </div>
  );
};

{/* <DCButton type="submit" onClick={onECheck}>Email Check</DCButton> {' '}{emailText}
<DCButton type="submit" onClick={onNCheck}>Nickname Check</DCButton>{' '}{usernameText} */} 
signUp.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

signUp.defaultProps = {
  emailMessage: '',
  usernameMessage: ''
}

/*export default signUp*/
