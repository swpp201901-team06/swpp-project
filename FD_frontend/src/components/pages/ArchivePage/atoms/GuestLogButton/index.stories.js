import React from 'react'
import { storiesOf } from '@kadira/storybook'
import GuestLogButton from '.'

storiesOf('GuestLogButton', module)
  .add('default', () => (
    <GuestLogButton>Hello</GuestLogButton>
  ))
  .add('reverse', () => (
    <GuestLogButton reverse>Hello</GuestLogButton>
  ))
