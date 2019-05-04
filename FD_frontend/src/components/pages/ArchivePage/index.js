import React from 'react'
import TempMolecule from '../../../containers/pages/ArchivePage/TempMolecule'

const ArchivePage = ({ownProps}) => {
  console.log('components/pages/ArchivePage/index ArchivePage 1')
  console.log(ownProps)
  console.log('components/pages/ArchivePage/index ArchivePage 2')
  return (
    <div>
      <TempMolecule />
    </div>
  )
}

export default ArchivePage
