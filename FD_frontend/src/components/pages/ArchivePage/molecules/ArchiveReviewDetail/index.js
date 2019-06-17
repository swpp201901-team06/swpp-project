import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router'
import DetailButton from '../../atoms/DetailButton'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

class ArchiveReviewDetail extends React.Component {
  render() {
    let reviewId
    let editUrl
    const isLoggedIn = localStorage.hasOwnProperty('nickname')
    const userNickname = (isLoggedIn ? JSON.parse(localStorage.getItem('nickname')) : null)
    console.log('ArchiveReviewDetail userNickname set')
    console.log(userNickname)
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
    console.log('ArchiveReviewDetail this.props.reviewstate')
    console.log(this.props.reviewstate)
    console.log(isLoggedIn)
    console.log(this.props.reviewstate.archiveOwnerNickname)
    console.log(userNickname)
    console.log(userNickname === this.props.reviewstate.archiveOwnerNickname)
    console.log(reviewId)
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
      if (selectedReview.photo) {
        const photoUrl = "http://localhost:8000"+selectedReview.photo
        reviewDetail = (
          <div>
            <h4>Restaurant: {selectedReview.restId}</h4>
            <h4>Date: {selectedReview.eatWhen}</h4>
            <img src={photoUrl} width="400" height="400" />
            <h4>Content: {selectedReview.content}</h4>
            <h4>Score: {selectedReview.score}</h4>
            <h4>Tags: {selectedReview.tags}</h4>
          </div>
        )
      } else {
        reviewDetail = (
          <div>
            <h4>Restaurant: {selectedReview.restId}</h4>
            <h4>Date: {selectedReview.eatWhen}</h4>
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
      <div>
        {ownerOption}
        {reviewDetail}
      </div>
    )
  }
}

ArchiveReviewDetail.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default ArchiveReviewDetail
