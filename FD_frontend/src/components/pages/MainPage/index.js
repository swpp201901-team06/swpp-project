import React from 'react'
import Main from '../../../containers/MainPage/Main'
import styled from 'styled-components'
// import { PageTemplate, Header, Hero, Footer, FeatureList } from 'components'

const logo= {
  height : 200,
  width : 500,
  margin : 100
};

const main = {
  height : '30%',
  width : '30%',
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`
const MainPage = () => {
  return (
      <div>
        <Wrapper>
          <img src={require('./logo.png')} style={logo}/>
          <Main style={main}/>
        </Wrapper>
      </div>
  )
}

export default MainPage
