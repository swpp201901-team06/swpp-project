import React from 'react'

const ArchivePage = React.createClass({
  render () {
    return (
      <div>
        {this.props.params.nickname}
        's archive page
      </div>
    )
  }
})

export default ArchivePage
