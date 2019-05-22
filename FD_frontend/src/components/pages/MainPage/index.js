import React from 'react'
import Main from '../../../containers/MainPage/Main'
// import { PageTemplate, Header, Hero, Footer, FeatureList } from 'components'

const bgStyles = {
  backgroundColor : "#a91935",
  height : '100%',
  width : '100%'
};

const MainPage = () => {
  return (
    <div style={bgStyles}>
      <Main/>
    </div>
    
    // <BodyBackgroundColor backgroundColor='#FF00FF'>
    //     <h1>Home, sweet home.</h1>
    // </BodyBackgroundColor>
  )
}

export default MainPage
