import React from 'react'
import { storiesOf } from '@kadira/storybook'
import GoogleMap from '.'

storiesOf('GoogleMap', module)
  .add('default', () => (
    <GoogleMap>Hello</GoogleMap>
  ))
  .add('reverse', () => (
    <GoogleMap reverse>Hello</GoogleMap>
  ))
