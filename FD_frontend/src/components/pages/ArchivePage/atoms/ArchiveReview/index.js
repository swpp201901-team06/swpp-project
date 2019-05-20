import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Styledli = styled.li`
  font-family: ${font('primary')};
`

const ArchiveReview = () => {
	return (
		<div>
			<h4>{props.eatWhen}{'   '}</h4>
			<h4>{props.restaurantId}{'   '}
			{props.score}</h4>
			<img src={props.photo} />
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
