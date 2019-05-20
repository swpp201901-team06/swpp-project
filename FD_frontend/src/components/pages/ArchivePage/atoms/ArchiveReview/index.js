import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Styledli = styled.li`
  font-family: ${font('primary')};
`

const ArchiveReview = ({ review }) => {
	return (
		<div>
			{review.id}
			{review.content}
			{review.eatWhen}
  	</div>
  )
}

ArchiveReview.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

ArchiveReview.defaultProps = {
  palette: 'grayscale',
}

export default ArchiveReview
