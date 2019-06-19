import React from 'react'
import styled from 'styled-components'
import SideBar from '../../../containers/SideBar/SideBar'
import { Link } from 'react-router'
import PostButton from './atoms/PostButton'
import ArchiveReviewList from '../../../containers/ArchivePage/ReviewList'
import ArchiveReviewDetail from '../../../containers/ArchivePage/ReviewDetail'
import ReviewMap from '../../molecules/ReviewMap'

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
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin-top: 3em
  margin-left: 0em
`

const PostWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin-left: 0em
  margin-top: 1em
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
    const userNickname = JSON.parse(localStorage.getItem('nickname'))
    const archiveOwnerNickname = this.props.params.nickname
    if (userNickname === archiveOwnerNickname) {
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
            <ArchiveReviewList style={{margin:'10px'}}>
              {this.props.params.nickname}
            </ArchiveReviewList>
            <ArchiveReviewDetail />
          </Wrapper>
          
         
          <ReviewMap />
          
        </div>
      )
    }
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
          
        </Wrapper>
        <ReviewMap />
      </div>
    )
  }
}

export default ArchivePage
//</PostWrapper>