import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { GoogleMapPanel } from 'components'

storiesOf('GoogleMapPanel', module)
  .add('default', () => (
    <GoogleMapPanel>Hello</GoogleMapPanel>
  ))
  .add('reverse', () => (
    <GoogleMapPanel reverse>Hello</GoogleMapPanel>
  ))
