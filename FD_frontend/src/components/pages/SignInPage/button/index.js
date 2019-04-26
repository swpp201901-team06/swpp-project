import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const button = styled.span`
  font-family: ${font('primary')};
  color: ${palette({ grayscale: 0 }, 1)};
`

button.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

button.defaultProps = {
  palette: 'grayscale',
}

export default button
