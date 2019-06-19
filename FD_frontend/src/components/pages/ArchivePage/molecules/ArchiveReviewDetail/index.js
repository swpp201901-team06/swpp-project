import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router'
import DetailButton from '../../atoms/DetailButton'

const Review = styled.li`
  background-color: #d0997c;
  margin-top:3em;
  margin-bottom:1em;
  padding : 1em;
  text-align : center;
  border: 3px solid white;
`

class ArchiveReviewDetail extends React.Component {
  render() {
    let reviewId
    let editUrl
    const isLoggedIn = localStorage.hasOwnProperty('nickname')
    const userNickname = (isLoggedIn ? JSON.parse(localStorage.getItem('nickname')) : null)
    if (this.props.reviewstate.selectedReviewId) {
      if (this.props.reviewstate.selectedReviewObj == null) {
        this.props.getSelectedReview(this.props.reviewstate.selectedReviewId)
      }
      reviewId = this.props.reviewstate.selectedReviewId
      editUrl = `/post/${reviewId}`
    } else {
      reviewId = null
    }
    const onPressDelete = () => {
      this.props.onDeleteReview(reviewId, this.props.reviewstate.archiveOwnerNickname)
    }
    let ownerOption
    if (isLoggedIn && (userNickname === this.props.reviewstate.archiveOwnerNickname) && reviewId) {
      ownerOption = (
        <div>
          <h4>
            <Link to={editUrl}>
              <DetailButton>Edit</DetailButton>
            </Link>
            {'    '}
            <DetailButton onClick={onPressDelete}>Delete</DetailButton>
          </h4>
        </div>
      )
    } else {
      ownerOption = ' '
    }
    let reviewDetail
    if (this.props.reviewstate.selectedReviewObj) {
      const selectedReview = this.props.reviewstate.selectedReviewObj
<<<<<<< HEAD

<<<<<<< HEAD
      const eatWhenDate = new Date(selectedReview.eatWhen).toLocaleString('ko-KR')

=======
      const eatWhenDate = new Date(selectedReview.eatWhen).toLocaleString('ko-KR', { timeZone: 'UTC' })
      
>>>>>>> 46bd0a2f7cc8aa800f4770d55fed6d4a6dc45f2b
=======
      const eatWhenDate = new Date(selectedReview.eatWhen).toLocaleString('ko-KR', { timeZone: 'UTC' })
      

>>>>>>> 123a562a03b7d3d50739488511e596fbc285f831
      if (selectedReview.photo) {
        const photoUrl = "http://3.13.219.185:8000"+selectedReview.photo
        reviewDetail = (
          <div>
            <h4>Restaurant: {selectedReview.restName}</h4>
            <h4>Address: {selectedReview.restAddr}</h4>
            <h4>Date: {eatWhenDate}</h4>
            <img src={photoUrl} width="400" height="400" />
            <h4>Content: {selectedReview.content}</h4>
            <h4>Score: {selectedReview.score}</h4>
            <h4>Tags: {selectedReview.tags}</h4>
          </div>
        )
      } else {
        reviewDetail = (
          <div>
            <h4>Restaurant: {selectedReview.restName}</h4>
            <h4>Address: {selectedReview.restAddr}</h4>
            <h4>Date: {eatWhenDate}</h4>
            <h4>Content: {selectedReview.content}</h4>
            <h4>Score: {selectedReview.score}</h4>
            <h4>Tags: {selectedReview.tags}</h4>
          </div>
        )
      }
    } else {
      reviewDetail = <h4>{' '}</h4>
    }
    return (
      <Review>
        {ownerOption}
        {reviewDetail}
      </Review>
    )
  }
}

ArchiveReviewDetail.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default ArchiveReviewDetail
