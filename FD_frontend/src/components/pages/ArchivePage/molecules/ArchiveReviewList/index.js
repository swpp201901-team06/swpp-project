import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import ArchiveReview from '../../atoms/ArchiveReview'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

class ArchiveReviewList extends React.Component {
  componentDidMount() {
    this.props.requestReviews(this.props.children)
  }

  render() {
    const reviewstate = this.props.statefunction.ArchivePage.reviews

    return (
      <div>
        {reviewstate.map((review) =>
          <ArchiveReview
            key={review.id}
            reviewId={review.id}
            eatWhen={review.eatWhen}
            restaurantId={review.restaurantId}
            score={review.score}
            content={review.content}
            photo={review.photo}
            onReviewClick={this.props.onReviewClick}
            sendReviewIdFunc={this.props.sendReviewId}
            archiveOwnerNickname={this.props.statefunction.ArchivePage.archiveOwnerNickname}
          />
        )}
      </div>
    )
  }
}

ArchiveReviewList.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default ArchiveReviewList
