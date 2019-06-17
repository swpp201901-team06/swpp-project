import React from 'react'
import { storiesOf } from '@kadira/storybook'
import SearchBox from '.'

storiesOf('SearchBox', module)
  .add('default', () => (
    <SearchBox>Hello</SearchBox>
  ))
  .add('reverse', () => (
    <SearchBox reverse>Hello</SearchBox>
  ))
