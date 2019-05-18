import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const GoogleMapPanel = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      {children}
    </Wrapper>
  )
}

GoogleMapPanel.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default GoogleMapPanel
