import React from 'react'
import { storiesOf } from '@kadira/storybook'
import ImageUpload from '.'

storiesOf('ImageUpload', module)
  .add('default', () => (
    <ImageUpload>Hello</ImageUpload>
  ))
  .add('reverse', () => (
    <ImageUpload reverse>Hello</ImageUpload>
  ))
