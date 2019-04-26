import React from 'react'
import { storiesOf } from '@kadira/storybook'
import button from '.'

storiesOf('button', module)
  .add('default', () => (
    <button>Hello</button>
  ))
  .add('reverse', () => (
    <button reverse>Hello</button>
  ))
