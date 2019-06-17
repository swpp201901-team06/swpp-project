import React from 'react'
import ReviewPostDetail from '../../../containers/PostPage/ReviewPost'
import styled from 'styled-components'
import SideBar from '../../../containers/SideBar/SideBar'

const SideBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  flex-direction: row;
  background : #e0ba7c;
  color : #ffffff;
`

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

const logo = {
  height: 40,
  width: 100,
}


const title = {
  color: '#e0ba7c',
  fontSize: 80,
}

class PostPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const review = this.props.params.reviewId;
    console.log('PostPage component this.props')
    console.log(this.props)
    return (
      <div>
        <SideBarWrapper>
          <img src={require('../../../../../design_source/logo/logo.png')} style={logo} />
          <SideBar />
        </SideBarWrapper>
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
