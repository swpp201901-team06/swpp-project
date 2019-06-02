import React from 'react'
import { storiesOf } from '@kadira/storybook'
import SearchDropDown from '.'

storiesOf('SearchDropDown', module)
  .add('default', () => (
    <SearchDropDown>Hello</SearchDropDown>
  ))
  .add('reverse', () => (
    <SearchDropDown reverse>Hello</SearchDropDown>
  ))
