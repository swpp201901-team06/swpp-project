import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Main } from 'components'

storiesOf('Main', module)
  .add('default', () => (
    <Main>Hello</Main>
  ))
  .add('reverse', () => (
    <Main reverse>Hello</Main>
  ))
