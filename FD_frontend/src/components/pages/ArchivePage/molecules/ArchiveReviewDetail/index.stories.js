import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ArchiveReviewDetail } from 'components'

storiesOf('ArchiveReviewDetail', module)
  .add('default', () => (
    <ArchiveReviewDetail>Hello</ArchiveReviewDetail>
  ))
  .add('reverse', () => (
    <ArchiveReviewDetail reverse>Hello</ArchiveReviewDetail>
  ))
