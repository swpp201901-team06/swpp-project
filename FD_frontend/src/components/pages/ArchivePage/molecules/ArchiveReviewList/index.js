import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import ArchiveReview from '../../atoms/ArchiveReview'
import FollowButton from '../../atoms/FollowButton'
import Dropdown from 'react-dropdown'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin-top: 0em
  margin-left: 0em
`
const Review = styled.li`
  background-color: #e0ba7c;
  margin-bottom:1em;
  padding : 1em;
  &:hover, &:focus, &:active {
    background-color: #ff8d06;
  }
  text-align : center;
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
        
    let followText
    if(this.props.statefunction.ArchivePage.Follow){
      followText = 'Unfollow'
    }
    else {
      followText = 'Follow'
    }

    console.log(this.props.statefunction.ArchivePage.Follow)
    
    const reviewstate = this.props.statefunction.ArchivePage.reviews

    const onFollow = () => {
      console.log(this.props.children)
      this.props.doFollow(this.props.children)
    }
    
    let followButton
    if(localStorage.hasOwnProperty('nickname') && JSON.parse(localStorage.getItem('nickname')) != this.props.children) {
      followButton = (
        <FollowButton onClick={onFollow} style={{marginRight:'50px'}}> {followText} </FollowButton>
      )
    }
    else {
      followButton = ' '
    }

    return (
      <Wrapper>
        <h4 style={{color:"#FFFFFF"}}>{followButton}{'   '} visitor: {visitorCount}{'    '}</h4>
	      <Dropdown options={options} onChange={onCategoryChange} value={defaultOption} placeholder="Select an option" />
        {reviewstate.map((review) =>
          <ArchiveReview
            key={review.id}
            reviewId={review.id}
            eatWhen={review.eatWhen}
            restaurantId={review.rest_name}
            score={review.score}
            content={review.content}
            photo={review.photo}
            hits={review.hits}
            onReviewClick={this.props.onReviewClick}
            sendReviewIdFunc={this.props.sendReviewId}
            archiveOwnerNickname={review.archive}
          />
        )}
      </Wrapper>
    )
  }
}

ArchiveReviewList.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default ArchiveReviewList