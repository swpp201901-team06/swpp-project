import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const SearchDropDown = styled.span`
  font-family: ${font('primary')};
  color: ${palette({ grayscale: 0 }, 1)};
`

SearchDropDown.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

SearchDropDown.defaultProps = {
  palette: 'grayscale',
}

export default SearchDropDown
