import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import { HomePage, SignInPage, SignUpPage, ArchivePage } from 'components'

const routes = (
  <div>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="signin" component={SignInPage} />
      <Route path="signup" component={SignUpPage} />
      <Route path=":nickname/archive" component={ArchivePage} />
    </Route>
  </div>
)

export default routes
