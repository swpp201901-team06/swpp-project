import React from 'react'
import ReviewPostDetail from '../../../containers/PostPage/ReviewPost'
import GoogleMap from '../../molecules/GoogleMap'

class PostPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let review;
    review = this.props.params.reviewId;
    return (
      <div>
        <h4>{'Post Review'}</h4>
        <ReviewPostDetail>
          {review}
        </ReviewPostDetail>
        <GoogleMap />
      </div>
    )
  }
}

export default PostPage
