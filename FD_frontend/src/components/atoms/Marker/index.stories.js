import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Marker from '.'

storiesOf('Marker', module)
  .add('default', () => (
    <Marker>Hello</Marker>
  ))
  .add('reverse', () => (
    <Marker reverse>Hello</Marker>
  ))
