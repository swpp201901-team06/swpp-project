import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const GuestLogButton = styled.span`
  font-family: ${font('primary')};
  color: ${palette({ grayscale: 0 }, 1)};
`

GuestLogButton.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

GuestLogButton.defaultProps = {
  palette: 'grayscale',
}

export default GuestLogButton
