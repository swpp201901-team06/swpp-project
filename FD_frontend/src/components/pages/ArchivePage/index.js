import React from 'react'
import TempMolecule from '../../../containers/pages/ArchivePage/TempMolecule'

/*
const ArchivePage = ({nickname}) => {
  console.log('components/pages/ArchivePage/index ArchivePage 1')
  console.log(nickname)
  console.log('components/pages/ArchivePage/index ArchivePage 2')
  return (
    <div>
      <TempMolecule />
    </div>
  )
}
*/

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
