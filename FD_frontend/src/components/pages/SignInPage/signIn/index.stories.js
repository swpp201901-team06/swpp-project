import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { signIn } from 'components'

storiesOf('signIn', module)
  .add('default', () => (
    <signIn>Hello</signIn>
  ))
  .add('reverse', () => (
    <signIn reverse>Hello</signIn>
  ))
