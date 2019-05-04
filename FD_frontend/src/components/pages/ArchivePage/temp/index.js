import React from 'react'

const TempMolecule = ({nickname}) => {
  console.log("components/pages/ArchivePage/temp/index TempMolecule 1")
  console.log(nickname)
  console.log("components/pages/ArchivePage/temp/index TempMolecule 2")
  return (
    <div>
      {nickname}
      's Archive
    </div>
  )
}

export default TempMolecule
