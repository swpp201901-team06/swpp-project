import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const DateTimeInput = styled.span`
  font-family: ${font('primary')};
  color: ${palette({ grayscale: 0 }, 1)};
`

DateTimeInput.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

DateTimeInput.defaultProps = {
  palette: 'grayscale',
}

export default DateTimeInput
