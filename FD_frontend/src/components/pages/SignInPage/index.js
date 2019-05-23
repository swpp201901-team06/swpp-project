import React from 'react'
import SignIn from '../../../containers/SignInPage/SignIn'
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

const SignInPage = () => {
  return (
    <div>
      <Wrapper>
        <h1 style={title}>
          Sign In
        </h1>
        <br/>
        <SignIn/>
      </Wrapper>
    </div>
  )
}

export default SignInPage
