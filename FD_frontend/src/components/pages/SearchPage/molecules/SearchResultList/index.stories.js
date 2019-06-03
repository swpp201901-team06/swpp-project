import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { SearchResultList } from 'components'

storiesOf('SearchResultList', module)
  .add('default', () => (
    <SearchResultList>Hello</SearchResultList>
  ))
  .add('reverse', () => (
    <SearchResultList reverse>Hello</SearchResultList>
  ))
