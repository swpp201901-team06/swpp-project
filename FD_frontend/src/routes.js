import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import { HomePage, SignUpPage } from 'components'

const routes = (
  <div>/
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
  </Route>
  <Route path="/signup" component={App}>
    <IndexRoute component={SignUpPage} />
  </Route>
  </div>
)

export default routes
