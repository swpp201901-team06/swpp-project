import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const SignInButton = styled.span`
  font-family: ${font('primary')};
  color: ${palette({ grayscale: 0 }, 1)};
`

SignInButton.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

SignInButton.defaultProps = {
  palette: 'grayscale',
}

export default SignInButton
