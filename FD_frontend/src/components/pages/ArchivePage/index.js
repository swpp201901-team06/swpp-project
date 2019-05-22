import React from 'react'
import SideBar from '../../../containers/SideBar/SideBar'
import { Link } from 'react-router'
import PostButton from './atoms/PostButton'
import ArchiveReviewList from '../../../containers/ArchivePage/ReviewList'
import ArchiveReviewDetail from '../../../containers/ArchivePage/ReviewDetail'
import GoogleMap from '../../molecules/GoogleMap'

const ArchivePage = React.createClass({
  render () {
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
})

export default ArchivePage
