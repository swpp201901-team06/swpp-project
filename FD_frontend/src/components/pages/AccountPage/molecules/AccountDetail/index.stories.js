import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { signUp } from 'components'

storiesOf('signUp', module)
  .add('default', () => (
    <signUp>Hello</signUp>
  ))
  .add('reverse', () => (
    <signUp reverse>Hello</signUp>
  ))
