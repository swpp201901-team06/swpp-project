import React from 'react'

const ArchivePage = ({nickname}) => {
  console.log("components/pages/ArchivePage/index 1")
  console.log(nickname)
  console.log("components/pages/ArchivePage/index 2")
  return (
    <div>
      {nickname}
      '\'s Archive'
    </div>
  )
}

export default ArchivePage
