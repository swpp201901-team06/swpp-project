import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Searchbox } from 'components'

storiesOf('Searchbox', module)
  .add('default', () => (
    <Searchbox>Hello</Searchbox>
  ))
  .add('reverse', () => (
    <Searchbox reverse>Hello</Searchbox>
  ))
