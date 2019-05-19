import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import MainButton from '../../Atoms/MainButton'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

export const Main = ({ statefunction, onClickSignin, onClickGuest }) => {
  const onSignin = () => {
    console.log("si_mol");
    onClickSignin();
  };
  const onGuest = () => {
    console.log("gu_mol");
    onClickGuest();
  };
  return (
    <div>
      <MainButton type="signin" onClick={onSignin}>로그인</MainButton>
      <MainButton type="guest" onClick={onGuest}>게스트</MainButton>
    </div>
  );
}

Main.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}
