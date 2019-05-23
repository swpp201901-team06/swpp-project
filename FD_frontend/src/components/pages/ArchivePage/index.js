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
const logo= {
  height : 40,
  width : 100
};

const ArchivePage = React.createClass({
  render () {
    console.log('ArchivePage render')
    console.log(this.props.params)
    const userNickname = JSON.parse(localStorage.getItem('nickname'))
    const archiveOwnerNickname = this.props.params.nickname
    console.log(userNickname)
    console.log(archiveOwnerNickname)
    if (userNickname === archiveOwnerNickname) {
      return (
        <div>
          <SideBarWrapper>
            <img src={require('../../../../../design_source/logo/logo.png')} style={logo}/>
            {this.props.params.nickname}'s archive page
            <SideBar />
          </SideBarWrapper>
          
          <h1>{' '}</h1>
          <ArchiveReviewList>
            {this.props.params.nickname}
          </ArchiveReviewList>
          <h1>{' '}</h1>
          <Link to="/post/default">
            <PostButton>Post Review</PostButton>
          </Link>
          <h1>{' '}</h1>
          <ArchiveReviewDetail />
          <h1>{' '}</h1>
          <GoogleMap />
        </div>
      )
    }
    return (
      <div>
        {this.props.params.nickname}'s archive page
        <h1>{' '}</h1>
        <SideBar />
        <h1>{' '}</h1>
        <ArchiveReviewList>
          {this.props.params.nickname}
        </ArchiveReviewList>
        <h1>{' '}</h1>
        <ArchiveReviewDetail />
        <h1>{' '}</h1>
        <GoogleMap />
      </div>
    )
  }
})

export default ArchivePage
