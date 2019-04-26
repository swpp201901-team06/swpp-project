import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { SignInPage } from 'components'

storiesOf('SignInPage', module)
  .add('default', () => (
    <SignInPage />
  ))
