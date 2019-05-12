import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { AccountPage } from 'components'

storiesOf('AccountPage', module)
  .add('default', () => (
    <AccountPage />
  ))
