import React from 'react'
import styled from 'styled-components'
import SideBar from '../../../containers/SideBar/SideBar'
import GuestSearch from '../../../containers/GuestPage/GuestSearch'

import { PageTemplate, Header, Hero, Footer, FeatureList } from 'components'

const SideBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  flex-direction: row;
  background : #e0ba7c;
  color : #ffffff;
`
const logo = {
  height: 40,
  width: 100,
}

const GuestPage = () => {
  return (
    <div>
      <SideBarWrapper>
        <img src={require('../../../../../design_source/logo/logo.png')} style={logo} />
        <SideBar />
      </SideBarWrapper>
      <GuestSearch />
    </div>
  )
}

export default GuestPage
