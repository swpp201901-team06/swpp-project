import React from 'react'
import { storiesOf } from '@kadira/storybook'
import DateTimeInput from '.'

storiesOf('DateTimeInput', module)
  .add('default', () => (
    <DateTimeInput>Hello</DateTimeInput>
  ))
  .add('reverse', () => (
    <DateTimeInput reverse>Hello</DateTimeInput>
  ))
