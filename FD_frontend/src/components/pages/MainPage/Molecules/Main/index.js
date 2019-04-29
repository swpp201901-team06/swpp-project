import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import MainButton from '../../Atoms/MainButton'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const Main = ({ statefunction, onClickSignIn, onClickGuest }) => {
  return (
    <div>
      <MainButton type="signin" onClick={onClickSignIn}>로그인</MainButton>
      <MainButton type="guest" onClick={onClickGuest}>게스트</MainButton>
    </div>
  )
}

Main.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default Main
