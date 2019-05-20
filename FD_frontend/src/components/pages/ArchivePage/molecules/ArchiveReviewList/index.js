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
    console.log(this.props.statefunction.ArchivePage.reviews)
    const reviewstate = this.props.statefunction.ArchivePage.reviews
    return (
      <div>
        <Wrapper>
          {reviewstate.map(review => <ArchiveReview key={review.id}
          {...review}
			    onClick={() => onReviewClick(review.id)}/>
          )}
        </Wrapper>
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
