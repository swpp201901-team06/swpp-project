/* eslint-disable react/prop-types */
import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import ArchiveReview from '../../atoms/ArchiveReview'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

class ArchiveReviewList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('ArchiveReviewList componentDidMount')
    console.log(this.props)
    this.props.requestReviews(this.props.statefunction.SignInPage.nickname)
  }

  render() {
    console.log('this reviews!')
    console.log(this.props.statefunction.ArchivePage.reviews)
    const reviewstate = this.props.statefunction.ArchivePage.reviews
    const onReviewClick = this.props.onReviewClick
    return (
      /*
      <div>
        {reviewstate.map((review) =>
          <div key={review.id}>
            <h4>
              {review.id}{'   '}
              {review.eatWhen}{'   '}
              {review.restaurantId}{'   '}
              {review.score}{'   '}
              {review.content}{'  '}
              {review.photo}
            </h4>
            <img src={'http://localhost:8000'+review.photo} width="400" height="400" />
          </div>
        )}
      </div>
      */
      <div>
        {reviewstate.map((review) =>
          <ArchiveReview
            key={review.id}
            eatWhen={review.eatWhen}
            restaurantId={review.restaurantId}
            score={review.score}
            content={review.content}
            photo={review.photo}
            onReviewClick={onReviewClick}
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
