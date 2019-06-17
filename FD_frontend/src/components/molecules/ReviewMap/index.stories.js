import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ReviewMap } from 'components'

storiesOf('ReviewMap', module)
  .add('default', () => (
    <ReviewMap>Hello</ReviewMap>
  ))
  .add('reverse', () => (
    <ReviewMap reverse>Hello</ReviewMap>
  ))
