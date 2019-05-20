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
    this.props.requestReviews(this.props.statefunction.SignInPage.nickname);
  }
	constructor(props){
    super(props);
  };

  render() {
	console.log('this reviews!')
    console.log(this.props.statefunction.ArchivePage.reviews)
    const reviewstate = this.props.statefunction.ArchivePage.reviews
    return (
      <div>
					{reviewstate.map(( review ) => 
						<div key={review.id}>
							<h4>{review.id}{'   '}
							{review.eatWhen}{'   '}
							{review.restaurantId}{'   '}
							{review.score}{'   '}
							{review.content}</h4>
						</div>
					)}
        <h4>{this.props.statefunction.SignInPage.nickname} {'`s review list'}</h4>
      </div>
    )
  }
}

ArchiveReviewList.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default ArchiveReviewList
