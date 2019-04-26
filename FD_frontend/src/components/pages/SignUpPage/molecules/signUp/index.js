import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import DCButton from '../../atoms/DCButton'
import SubmitButton from '../../atoms/SubmitButton'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

export const signUp = ({ statefunction }) => {
    console.log("start loading page");
    let email, pw, confirmpw, nickname;

    const onECheck = () => {
      //onEmailCheck(email.value);
    };
    const onNCheck = () => {
      //onNicknameCheck(nickname.value);
    };
    const onSubmit = () => {
      //onSignUpSubmit(email.value, pw.value, confirmpw.value, nickname.value); 
    };
  console.log("asdf");
  return (
    <div>
      <input ref={node => {email = node;}} />
      <input ref={node => {pw = node;}} />
      <input ref={node => {confirmpw = node;}} />
      <input ref={node => {nickname = node;}} />
      <DCButton type="submit" onClick={onECheck}>ID Check</DCButton>
      <DCButton type="submit" onClick={onNCheck}>Nickname Check</DCButton>
      <SubmitButton type="submit" onClick={onSubmit}>Submit</SubmitButton>
    </div>
  );
};

signUp.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

//export default signUp
