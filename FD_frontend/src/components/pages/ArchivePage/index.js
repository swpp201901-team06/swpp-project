import React from 'react'
import SideBar from '../../../containers/SideBar/SideBar'

const ArchivePage = React.createClass({
  render () {
    return (
      <div>
        {this.props.params.nickname}
        's archive page
        <SideBar/>
      </div>
    )
  }
})

export default ArchivePage
