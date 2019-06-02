import React from 'react'
import SideBar from '../../../containers/SideBar/SideBar'
import GuestSearch from '../../../containers/GuestPage/GuestSearch'

import { PageTemplate, Header, Hero, Footer, FeatureList } from 'components'

const GuestPage = () => {
  return (
    <div>
      <SideBar />
      <GuestSearch />
    </div>
  )
}

export default GuestPage
