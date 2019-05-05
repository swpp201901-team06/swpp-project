import React from 'react'
import { storiesOf } from '@kadira/storybook'
import SignInButton from '.'

storiesOf('SignInButton', module)
  .add('default', () => (
    <SignInButton>Hello</SignInButton>
  ))
  .add('reverse', () => (
    <SignInButton reverse>Hello</SignInButton>
  ))
