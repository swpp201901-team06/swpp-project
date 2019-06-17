import React from 'react'
import AccountDetail from '../../../containers/AccountPage/AccountDetail'
import styled from 'styled-components'

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


class AccountPage extends React.Component {
  render() {
    let accountOption
    const currentUser=JSON.parse(localStorage.getItem('nickname'))
    if(currentUser == this.props.params.nickname){
      accountOption = (
      <div>
        <h1>
          {this.props.params.nickname}'s account page
        </h1>
        <AccountDetail/>
      </div>
      )
    }
    else{
      accountOption = (
      <div>
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
