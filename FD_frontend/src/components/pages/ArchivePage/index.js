import React from 'react'

const ArchivePage = React.createClass({
  render () {
    console.log('components/pages/ArchivePage/index ArchivePage 1')
    console.log(this.props.params)
    console.log('components/pages/ArchivePage/index ArchivePage 2')
    return (
      <div>
        {this.props.params.nickname}
        's archive page
      </div>
    )
  }
})

export default ArchivePage
