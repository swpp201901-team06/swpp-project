import React from 'react'
import styled from 'styled-components'
import SideBar from '../../../containers/SideBar/SideBar'
import { Link } from 'react-router'
import PostButton from './atoms/PostButton'
import ArchiveReviewList from '../../../containers/ArchivePage/ReviewList'
import ArchiveReviewDetail from '../../../containers/ArchivePage/ReviewDetail'
import GoogleMap from '../../molecules/GoogleMap'

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
  justify-content: space-around;
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin-top: -2em
  margin-left: 8em
`

const PostWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin-left: 98em
  margin-top: 3em
`
const logo = {
  height: 40,
  width: 100,
}

// const align = {
//   alignItems : center
// }

class ArchivePage extends React.Component {
  render() {
    console.log('ArchivePage render')
    console.log(this.props.params)
    const userNickname = JSON.parse(localStorage.getItem('nickname'))
    const archiveOwnerNickname = this.props.params.nickname
    console.log(userNickname)
    console.log(archiveOwnerNickname)
    if (userNickname === archiveOwnerNickname) {
      console.log('ArchivePage return 1')
      return (
        <div>
          <SideBarWrapper>
            <img src={require('../../../../../design_source/logo/logo.png')} style={logo} />
            {this.props.params.nickname}'s archive page
            <SideBar />
          </SideBarWrapper>
          <PostWrapper>
            <Link to="/post/default">
              <PostButton style={{ margin: '10px' }}>Post Review</PostButton>
            </Link>
          </PostWrapper>
          <Wrapper>
            <ArchiveReviewList>
              {this.props.params.nickname}
            </ArchiveReviewList>
            <ArchiveReviewDetail />
          </Wrapper>

          <GoogleMap />
        </div>
      )
    }
    console.log('ArchivePage return 2')
    return (
      <div>
        <SideBarWrapper>
          <img src={require('../../../../../design_source/logo/logo.png')} style={logo} />
          {this.props.params.nickname}'s archive page
          <SideBar />
        </SideBarWrapper>

        <Wrapper>
          <ArchiveReviewList>
            {this.props.params.nickname}
          </ArchiveReviewList>
          <ArchiveReviewDetail />
          <GoogleMap />
        </Wrapper>
      </div>
    )
  }
}

export default ArchivePage
