import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { GuestPage } from 'components'

storiesOf('GuestPage', module)
  .add('default', () => (
    <GuestPage />
  ))
