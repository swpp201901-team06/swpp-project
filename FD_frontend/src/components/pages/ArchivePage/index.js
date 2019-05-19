import React from 'react'
import SideBar from '../../../containers/SideBar/SideBar'
import { Link } from 'react-router'
import PostButton from './atoms/PostButton'

const ArchivePage = React.createClass({
  render () {
    return (
      <div>
        {this.props.params.nickname}
        's archive page
        <h1>{' '}</h1>
        <SideBar />
        <h1>{' '}</h1>
        <Link to='/post'>
          <PostButton>Post Review</PostButton>
        </Link>
      </div>
    )
  }
})

export default ArchivePage
