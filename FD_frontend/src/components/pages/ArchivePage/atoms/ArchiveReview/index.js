import React from 'react'
import styled from 'styled-components'
import { font } from 'styled-theme'

const Styledli = styled.li`
  font-family: ${font('primary')};
`

const backendUrl = 'http://localhost:8000'

class ArchiveReview extends React.Component {
  render() {
    const reviewId = this.props.reviewId
    const eatWhen = this.props.eatWhen
    const restaurantId = this.props.restaurantId
    const score = this.props.score
    const content = this.props.content
    const photo = this.props.photo
    const hits = this.props.hits
    const onReviewClick = this.props.onReviewClick
    const sendReviewId = this.props.sendReviewIdFunc
    const archiveOwnerNickname = this.props.archiveOwnerNickname
    const onClickThis = () => {
      console.log(restaurantId)
      sendReviewId(reviewId)
      onReviewClick(reviewId, archiveOwnerNickname)
    }

    if (photo) {
      return (
        <div onClick={() => { onClickThis() }}>
          <h4>
            {'view: '}{hits}{'   '}
            {'date: '}{eatWhen}{'   '}</h4>
          <h4>
            {'where: '}{restaurantId}{'   '}
            {'score: '}{score}{'   '}
          </h4>
          <img src={`${backendUrl}${photo}`} width="100" height="100" />
        </div>
      )
    }

    return (
      <div onClick={() => { onClickThis() }}>
        <h4>
          <h4>
            {'view: '}{hits}{'   '}
            {'date: '}{eatWhen}{'   '}</h4>
          <h4>
            {'where: '}{restaurantId}{'   '}</h4>
          <p/>
          <h4>
            {'score: '}{score}{'   '}
          </h4>
        </h4>
      </div>
    )
  }
}

ArchiveReview.defaultProps = {
  palette: 'grayscale',
}

export default ArchiveReview
