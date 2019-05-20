import React from 'react'
import { ReviewPostDetail } from './molecules/ReviewPostDetail'

const PostPage = () => {
  return (
    <div>Post Page
      <ReviewPostDetail>
				{this.props.params.reviewId}
			</ReviewPostDetail>
    </div>
  )
}

export default PostPage
