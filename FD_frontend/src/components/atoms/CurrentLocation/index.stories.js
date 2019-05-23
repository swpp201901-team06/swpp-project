import React from 'react'
import { storiesOf } from '@kadira/storybook'
import CurrentLocation from '.'

storiesOf('CurrentLocation', module)
  .add('default', () => (
    <CurrentLocation>Hello</CurrentLocation>
  ))
  .add('reverse', () => (
    <CurrentLocation reverse>Hello</CurrentLocation>
  ))
