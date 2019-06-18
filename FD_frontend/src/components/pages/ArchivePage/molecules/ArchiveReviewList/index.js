import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import ArchiveReview from '../../atoms/ArchiveReview'
import Dropdown from 'react-dropdown'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

class ArchiveReviewList extends React.Component {
  componentDidMount() {
    this.props.requestReviews('default', this.props.children)
  }

  render() {
    const defaultOption = 'default'
    const options = [
      'When', 'Score', 'Id'
    ]
    let sortOption
    const onCategoryChange = (e) => {
      switch (e.value) {
        case 'When':
          sortOption = 'eatWhen'
          break
        case 'Score':
          sortOption = 'score'
          break
        case 'Id':
          sortOption = 'id'
          break
      }
      this.props.requestReviews(sortOption, this.props.children)
    }
    
    let visitorCount
    if(this.props.statefunction.ArchivePage.visitorCount){
      visitorCount = this.props.statefunction.ArchivePage.visitorCount
    }
    else {
      visitorCount = ' '
    }
        
    const reviewstate = this.props.statefunction.ArchivePage.reviews

    return (
      <div>
        <h4>{visitorCount}</h4>
	      <Dropdown options={options} onChange={onCategoryChange} value={defaultOption} placeholder="Select an option" />
        {reviewstate.map((review) =>
          <ArchiveReview
            key={review.id}
            reviewId={review.id}
            eatWhen={review.eatWhen}
            restaurantId={review.restaurantId}
            score={review.score}
            content={review.content}
            photo={review.photo}
            hits={review.hits}
            onReviewClick={this.props.onReviewClick}
            sendReviewIdFunc={this.props.sendReviewId}
            archiveOwnerNickname={review.archive}
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
