import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import { MainPage } from 'components'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={MainPage} />
  </Route>
)

export default routes
