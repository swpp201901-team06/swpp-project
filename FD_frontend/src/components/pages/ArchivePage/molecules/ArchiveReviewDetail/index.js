/* eslint-disable react/prop-types */
import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router'
import DetailButton from '../../atoms/DetailButton/index'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const ArchiveReviewDetail = ({ reviewId, reviewObj, isLoggedIn,
  userNickname, archiveOwnerNickname, onDeleteReview }) => {

  const deleteReview = () => {
    onDeleteReview(reviewId)
  }

  if (reviewId === null) {
    return null
  }

  return (
    <div>
      {
        (!isLoggedIn || (userNickname === archiveOwnerNickname)) ? (
          <div>
            <DetailButton onClick={deleteReview}>Delete</DetailButton>
            <Link to={`/post/${reviewId}`}>
              <DetailButton>Edit</DetailButton>
            </Link>
          </div>
        ) : (<div />)
      }
      Restaurant: {reviewObj.restId}
      <br />
      Date: {reviewObj.eatWhen}
      <br />
      Tags: {reviewObj.tags}
      <br />
      Score: {reviewObj.score}
      <br />
      Content: {reviewObj.content}
      <br />
      Photo: {reviewObj.photo}
    </div>
  )
}

ArchiveReviewDetail.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default ArchiveReviewDetail
