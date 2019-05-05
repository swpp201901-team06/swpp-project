import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import { MainPage,SigninPage,GuestPage } from 'components'

const routes = (
  <div>
    <Route path="/" component={App}>
      <IndexRoute component={MainPage} />
    </Route>
    <Route path="/signin" component={App}>
      <IndexRoute component={SigninPage} />
    </Route>
    <Route path="/guest" component={App}>
      <IndexRoute component={GuestPage} />
    </Route>
  </div>
)

export default routes
