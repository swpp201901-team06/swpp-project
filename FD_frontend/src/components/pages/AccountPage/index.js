import React from 'react'
import AccountDetail from '../../../containers/AccountPage/AccountDetail'
import styled from 'styled-components'
import SideBar from '../../../containers/SideBar/SideBar'

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
`

const title = {
  color: "#e0ba7c",
  fontSize : 80,
  margin : 100
};

const logo = {
  height: 40,
  width: 100,
}


class AccountPage extends React.Component {
  render() {
    let accountOption
    const currentUser=JSON.parse(localStorage.getItem('nickname'))
    if(currentUser == this.props.params.nickname){
      accountOption = (
      <div>
          <SideBarWrapper>
            <img src={require('../../../../../design_source/logo/logo.png')} style={logo} />
            {this.props.params.nickname}'s archive page
            <SideBar />
          </SideBarWrapper>
        <h1>
          My Account
        </h1>
        <AccountDetail/>
      </div>
      )
    }
    else{
      accountOption = (
      <div>
          <SideBarWrapper>
            <img src={require('../../../../../design_source/logo/logo.png')} style={logo} />
            {this.props.params.nickname}'s archive page
            <SideBar />
          </SideBarWrapper>
        <h1>
          You need to be logged in as this user to view this page.
        </h1>
      </div>
      )
    }
    return (
        accountOption
    )
  }
}

export default AccountPage
