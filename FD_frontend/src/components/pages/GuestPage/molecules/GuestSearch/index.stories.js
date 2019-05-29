import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { GuestSearch } from 'components'

storiesOf('GuestSearch', module)
  .add('default', () => (
    <GuestSearch>Hello</GuestSearch>
  ))
  .add('reverse', () => (
    <GuestSearch reverse>Hello</GuestSearch>
  ))
