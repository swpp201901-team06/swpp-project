import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

export const ArchiveReviewDetail = ({ review }) => {
	const deleteReview = () =>{
		onDeleteReview(review)
	}
	
  return (
    <Wrapper {...props}>
    	{review.eatWhen}
    	{review.tags}
    	{review.score}
    	{review.comment}
    	{review.photo}
    	<DetailButton onClick={deleteReview}>Delete</DetailButton>
    	<DetailButton component={Link} raised to="/post">Edit</DetailButton>
    </Wrapper>
  )
}

ArchiveReviewDetail.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default ArchiveReviewDetail
