import React from 'react'
import { storiesOf } from '@kadira/storybook'
import SignUpButton from '.'

storiesOf('SignUpButton', module)
  .add('default', () => (
    <SignUpButton>Hello</SignUpButton>
  ))
  .add('reverse', () => (
    <SignUpButton reverse>Hello</SignUpButton>
  ))
