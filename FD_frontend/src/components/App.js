import React, { PropTypes } from 'react'
import { injectGlobal, ThemeProvider } from 'styled-components'

import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
    background-color : #a91935;
  }
`

const App = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

App.propTypes = {
  children: PropTypes.any,
}

export default App
