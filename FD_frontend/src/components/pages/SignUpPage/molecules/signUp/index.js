import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import Button from '../../atoms/Button'
import DCButton from '../../atoms/DCButton'
import SubmitButton from '../../atoms/SubmitButton'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

export const signUp = ({ statefunction, onDuplicateCheck, onSignUpSubmit }) => {
    console.log("start loading page");
    let email;
    let pw;
    let confirmpw;
    let nickname;

    const onECheck = () => {
      onDuplicateCheck('email', email.value);
    };
    const onNCheck = () => {
      onDuplicateCheck('username', nickname.value);
    };
    const onSubmit = () => {
      onSignUpSubmit(email.value, pw.value, confirmpw.value, nickname.value); 
    };
  console.log("asdf");
  return (
    <div>
      <h4>Email{' '} 
      <input ref={node => {email = node;}} />{'  '}
      <DCButton type="submit" onClick={onECheck}>Email Check</DCButton> </h4>
      <h4>Password{' '}
      <input ref={node => {pw = node;}} /></h4>
      <h4>Confirm Password{' '}
      <input ref={node => {confirmpw = node;}} /></h4>
      <h4>Nickname{' '}
      <input ref={node => {nickname = node;}} />{'  '}
      <DCButton type="submit" onClick={onNCheck}>Nickname Check</DCButton></h4>
      <h4>
      <SubmitButton type="submit" onClick={onSubmit}>Submit</SubmitButton></h4>
    </div>
  );
};

signUp.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

/*export default signUp*/
