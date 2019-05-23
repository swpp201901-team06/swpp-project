import React from 'react'
import { storiesOf } from '@kadira/storybook'
import MapContainer from '.'

storiesOf('MapContainer', module)
  .add('default', () => (
    <MapContainer>Hello</MapContainer>
  ))
  .add('reverse', () => (
    <MapContainer reverse>Hello</MapContainer>
  ))
