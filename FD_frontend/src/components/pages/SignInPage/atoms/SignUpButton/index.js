import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const SignUpButton = styled.span`
  font-family: ${font('primary')};
  color: ${palette({ grayscale: 0 }, 1)};
`

SignUpButton.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

SignUpButton.defaultProps = {
  palette: 'grayscale',
}

export default SignUpButton
