/* eslint-disable react/prop-types */
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
    console.log('ArchiveReviewDetail rendeAr')
    let reviewId
    let editUrl
    if (this.props.reviewstate.selectedReviewId) {
      console.log('ArchiveReviewDetail review state')
      console.log(this.props.reviewstate)
      if (this.props.reviewstate.selectedReviewObj == null) {
        this.props.getSelectedReview(this.props.reviewstate.selectedReviewId)
      }
      reviewId = this.props.reviewstate.selectedReviewId
      editUrl = `/post/${reviewId}`
    } else {
      reviewId = null
    }
    console.log('ArchiveReviewDetail set reviewid')
    const onPressDelete = () => {
      this.props.onDeleteReview(reviewId, this.props.reviewstate.archiveOwnerNickname)
    }
    console.log(this.props.reviewstate.isLoggedIn)
    console.log(this.props.reviewstate.userNickname)
    console.log(this.props.reviewstate.archiveOwnerNickname)
    console.log(reviewId)
    let ownerOption
    if (this.props.reviewstate.isLoggedIn &&
      (this.props.reviewstate.userNickname === this.props.reviewstate.archiveOwnerNickname) &&
      reviewId) {

      console.log('ArchiveReviewDetail if ownerOption')
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
    console.log('ArchiveReviewDetail set owneroption')
    let reviewDetail
    if (this.props.reviewstate.selectedReviewObj) {
      const selectedReview = this.props.reviewstate.selectedReviewObj
      if (selectedReview.photo) {
        reviewDetail = (
          <div>
            <h4>Restaurant: {selectedReview.restId}</h4>
            <h4>Date: {selectedReview.eatWhen}</h4>
            <img src={selectedReview.photo} width="400" height="400" />
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
    console.log('ArchiveReviewDetail set revewDetail')
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
