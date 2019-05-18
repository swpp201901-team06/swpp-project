import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ArchiveReviewPost } from 'components'

storiesOf('ArchiveReviewPost', module)
  .add('default', () => (
    <ArchiveReviewPost>Hello</ArchiveReviewPost>
  ))
  .add('reverse', () => (
    <ArchiveReviewPost reverse>Hello</ArchiveReviewPost>
  ))
