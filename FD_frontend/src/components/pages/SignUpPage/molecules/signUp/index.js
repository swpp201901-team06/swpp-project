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

export const signUp = ({ statefunction, onEmailCheck, onNicknameCheck, onSignUpSubmit }) => {
    console.log("start loading page");
    let email, pw, confirmpw, nickname;

    const onECheck = () => {
      onEmailCheck(email.value);
    };
    const onNCheck = () => {
      onNicknameCheck(nickname.value);
    };
    const onSubmit = () => {
      onSignUpSubmit(email.value, pw.value, confirmpw.value, nickname.value); 
    };
  console.log("asdf");
  return (
    <div>
      <input ref={node => {email = node;}} />
      <input ref={node => {pw = node;}} />
      <input ref={node => {confirmpw = node;}} />
      <input ref={node => {nickname = node;}} />
      <Button type="submit" onClick={onECheck}>ID Check</Button>
      <Button type="submit" onClick={onNCheck}>Nickname Check</Button>
      <Button type="submit" onClick={onSubmit}>Submit</Button>
    </div>
  );
};

signUp.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

//export default signUp
