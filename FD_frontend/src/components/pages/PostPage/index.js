import React from 'react'
import ReviewPostDetail from '../../../containers/PostPage/ReviewPost'

class PostPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let review;
    review = this.props.params.reviewId;
    return (
      <div>
        <h4>{'Post Page'}</h4>
        <ReviewPostDetail>
          {review}
        </ReviewPostDetail>
      </div>
    )
  }
}

export default PostPage
