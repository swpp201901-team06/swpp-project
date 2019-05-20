import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ReviewPostDetail } from 'components'

storiesOf('ReviewPostDetail', module)
  .add('default', () => (
    <ReviewPostDetail>Hello</ReviewPostDetail>
  ))
  .add('reverse', () => (
    <ReviewPostDetail reverse>Hello</ReviewPostDetail>
  ))
