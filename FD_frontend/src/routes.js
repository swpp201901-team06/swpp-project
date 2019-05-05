import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import { MainPage, SignInPage, GuestPage, ArchivePage } from 'components'

const routes = (
  <div>
    <Route path="/" component={App}>
      <IndexRoute component={MainPage} />
      <Route path="guest" component={GuestPage}>
      <Route path="signin" component={SignInPage} />
      <Route path="signup" component={HomePage} />
      <Route path=":nickname/archive" component={ArchivePage} />
    </Route>
  </div>
)

export default routes
