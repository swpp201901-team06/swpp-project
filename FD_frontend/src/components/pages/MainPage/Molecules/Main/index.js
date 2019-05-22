import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import MainButton from '../../Atoms/MainButton'

const margin = {
  margin : 10
}

const Main = ({ statefunction, onClickSignin, onClickGuest }) => {
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
      <MainButton type="signin" onClick={onSignin} style={margin}>Login</MainButton>
      <MainButton type="guest" onClick={onGuest} style={margin}>Guest</MainButton>
    </div>
  );
}

Main.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default Main
