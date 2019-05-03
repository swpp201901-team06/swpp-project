import React from 'react'
import { Route, IndexRoute, browserHistory } from 'react-router'

import App from 'components/App'
import { HomePage, SignInPage } from 'components'

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
    </Route>
    <Route path="/signin" component={App}>
      <IndexRoute component={SignInPage} />
    </Route>
  </Router>
)

export default routes
