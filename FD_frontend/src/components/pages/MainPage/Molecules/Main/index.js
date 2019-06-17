import React, { PropTypes } from 'react'
import MainButton from '../../Atoms/MainButton'

const margin = {
  margin: 10,
}

const Main = ({ statefunction, onClickSignIn, onClickGuest }) => {
  const onSignin = () => {
    onClickSignIn()
  }
  const onGuest = () => {
    onClickGuest()
  }
  return (
    <div>
      <MainButton type="signin" onClick={onSignin} style={margin}>Login</MainButton>
      <MainButton type="guest" onClick={onGuest} style={margin}>Guest</MainButton>
    </div>
  )
}

Main.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default Main
