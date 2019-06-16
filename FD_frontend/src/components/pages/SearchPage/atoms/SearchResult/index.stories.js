import React from 'react'
import { storiesOf } from '@kadira/storybook'
import SearchResult from '.'

storiesOf('SearchResult', module)
  .add('default', () => (
    <SearchResult>Hello</SearchResult>
  ))
  .add('reverse', () => (
    <SearchResult reverse>Hello</SearchResult>
  ))
