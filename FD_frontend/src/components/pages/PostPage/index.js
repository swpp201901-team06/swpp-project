import React from 'react'
import styled from 'styled-components'

import Search from '../../molecules/Searchbox'
import SideBar from '../../../containers/SideBar/SideBar'
import ReviewPostDetail from '../../../containers/PostPage/ReviewPost'

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
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin-top: 0em;
  margin-left: 0em;
  text-align:center;
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
