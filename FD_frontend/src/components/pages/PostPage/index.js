import React from 'react'
import ReviewPostDetail from '../../../containers/PostPage/ReviewPost'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`
const title = {
  color: "#e0ba7c",
  fontSize : 80
};

class PostPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let review;
    review = this.props.params.reviewId;
    return (
      <div>
        <Wrapper>
          <h1 style={title}>{'Posting'}</h1>
          <ReviewPostDetail>
            {review}
          </ReviewPostDetail>
        </Wrapper>
      </div>
    )
  }
}

export default PostPage
