import React from 'react'
import SignUp from '../../../containers/SignUpPage/SignUp'
import styled from 'styled-components'
import Button from '../../../components/pages/SignUpPage/atoms/Button'

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


const SignUpPage = () => {
  return (
    <div>
      <Wrapper>
        <h1 style={title}>
          Sign Up Page
          </h1>
        <SignUp/>
      </Wrapper>
    </div>
  )
}

export default SignUpPage
