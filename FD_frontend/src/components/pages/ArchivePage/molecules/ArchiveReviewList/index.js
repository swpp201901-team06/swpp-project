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
    console.log('ArchiveReviewList componentDidMount')
    console.log(this.props)
    this.props.requestReviews('default', this.props.children)
  }

  render() {
    const defaultOption = 'default'
    const options = [
      'When', 'Score', 'Id'
    ]
    let sortOption
    const onCategoryChange = (e) => {
    console.log('category changed!')
      switch(e.value){
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
        
    const reviewstate = this.props.statefunction.ArchivePage.reviews

    return (
      <div>
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
