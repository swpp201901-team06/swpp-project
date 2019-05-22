/* eslint-disable react/prop-types */
import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Styledli = styled.li`
  font-family: ${font('primary')};
`

// const ArchiveReview = () => {
//   return (
//     <div>
//       <h4>
//         {/* props.eatWhen */}{'   '}
//       </h4>
//       <h4>
//         {/* props.restaurantId */}{'   '}{/* props.score */}
//       </h4>
//       <img src={props.photo} />
//     </div>
//   )
// }

const backendUrl = 'http://localhost:8000/'

class ArchiveReview extends React.Component {
  render() {
    const reviewId = this.props.key
    const eatWhen = this.props.eatWhen
    const restaurantId = this.props.restaurantId
    const score = this.props.score
    const content = this.props.content
    const photo = this.props.photo
    const onReviewClick = this.props.onReviewClick
    const archiveOwnerNickname = this.props.archiveOwnerNickname
    const onClickThis = () => {
      onReviewClick(reviewId, archiveOwnerNickname)
    }

    return (
      <div onClick={() => { onClickThis() }}>
        <h4>
          {reviewId}{'   '}
          {eatWhen}{'   '}
          {restaurantId}{'   '}
          {score}{'   '}
          {content}{'  '}
        </h4>
        <img src={`${backendUrl}${photo}`} width="400" height="400" />
      </div>
    )
  }
}

ArchiveReview.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

ArchiveReview.defaultProps = {
  palette: 'grayscale',
}

export default ArchiveReview
