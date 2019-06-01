import React from 'react'
import ReviewPostDetail from '../../../containers/PostPage/ReviewPost'
import styled from 'styled-components'
import GoogleMap from '../../molecules/GoogleMap'

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin-top: -1em
  margin-left: 10em
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
        <GoogleMap />
      </div>
    )
  }
}

export default PostPage
