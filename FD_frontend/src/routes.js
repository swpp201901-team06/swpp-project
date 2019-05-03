import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import { HomePage, SignInPage } from 'components'

const routes = (
  <div>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
    </Route>
    <Route path="/signin" component={App}>
      <IndexRoute component={SignInPage} />
    </Route>
    <Route path="/signup" component={App}>
      <IndexRoute component={HomePage} />
    </Route>
  </div>
)

export default routes
