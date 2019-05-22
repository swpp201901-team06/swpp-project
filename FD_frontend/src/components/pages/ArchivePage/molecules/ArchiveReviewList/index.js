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
    const reviewstate = this.props.statefunction.ArchivePage.reviews
    const onReviewClick = (reviewId) => {
      console.log('review Id!')
      console.log(reviewId)
      this.props.sendReviewId(reviewId)
    }
    return (
      <div>
					{reviewstate.map(( review ) => 
						<div key={review.id} onClick = {() => {onReviewClick(review.id)}}>
							<h4>{review.id}{'   '}
							{review.eatWhen}{'   '}
							{review.restaurantId}{'   '}
							{review.score}{'   '}
							{review.content}{'  '}</h4>
							<img src={'http://localhost:8000'+review.photo} width="400" height="400"/>
						</div>
					)}
			</div>
			      	/*{reviewstate.map(( review ) => <ArchiveReview key={review.id} eatWhen={review.eatWhen} restaurantId={review.restaurantId} score={review.score} content={review.content} photo={review.photo} />)}
     	</div>*/
    )
  }
}

ArchiveReviewList.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default ArchiveReviewList
