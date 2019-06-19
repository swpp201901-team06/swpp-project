import React from 'react'
import styled from 'styled-components'
import SideBar from '../../../containers/SideBar/SideBar'
import GuestSearch from '../../../containers/GuestPage/GuestSearch'
import SearchResultList from '../../../containers/SearchPage/SearchResult'

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
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin-top: 0em
  margin-left: 0em
`

const logo = {
  height: 40,
  width: 100,
}

class SearchPage extends React.Component {
  render() {
    return (
      <div>
        <SideBarWrapper>
          <img src={require('../../../../../design_source/logo/logo.png')} style={logo} />
          <SideBar />
        </SideBarWrapper>
        <Wrapper>
          <GuestSearch />
          </Wrapper>
          <Wrapper>
          <SearchResultList >
            {this.props.params.method}
            {this.props.params.keyword}
          </SearchResultList>
        </Wrapper>
    
      </div>
    )
  }
}

export default SearchPage
