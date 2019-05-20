import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Styledli = styled.li`
  font-family: ${font('primary')};
`

const ArchiveReview = ({ eatWhen, score, tags, reviewId, restName, publicStatus }) => {
  <Styledli>
  {eatWhen}
  {restName}
  {score}
  </Styledli>
}

ArchiveReview.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

ArchiveReview.defaultProps = {
  palette: 'grayscale',
}

export default ArchiveReview
