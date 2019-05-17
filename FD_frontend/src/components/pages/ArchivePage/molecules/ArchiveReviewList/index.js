import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const ArchiveReviewList = ({ statefunction, children, ...props }) => {
	reviewstate = statefunction.PostPage
  return (
    <Wrapper>
      {reviewstate.map(review => <ArchiveReview key={review.id}
      {...review}
			onClick={() => onReviewClick(review.id)}/>
      )}
    </Wrapper>
  )
}

ArchiveReviewList.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default ArchiveReviewList
