import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { UserRankings } from 'components'

storiesOf('UserRankings', module)
  .add('default', () => (
    <UserRankings>Hello</UserRankings>
  ))
  .add('reverse', () => (
    <UserRankings reverse>Hello</UserRankings>
  ))
