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


const AccountPage = () => {
  return (
    <div>
      <Wrapper>
        <h1 style={title}>
          {this.props.params.nickname}
          's account page
        </h1>
        <AccountDetail>
          {this.props.params.nickname}
        </AccountDetail>
      </Wrapper>
    </div>
  )
}

export default AccountPage
