import React from 'react'
import { storiesOf } from '@kadira/storybook'
import ArchiveReview from '.'

storiesOf('ArchiveReview', module)
  .add('default', () => (
    <ArchiveReview>Hello</ArchiveReview>
  ))
  .add('reverse', () => (
    <ArchiveReview reverse>Hello</ArchiveReview>
  ))
