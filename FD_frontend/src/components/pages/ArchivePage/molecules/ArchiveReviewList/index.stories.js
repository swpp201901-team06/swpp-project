import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ArchiveReviewList } from 'components'

storiesOf('ArchiveReviewList', module)
  .add('default', () => (
    <ArchiveReviewList>Hello</ArchiveReviewList>
  ))
  .add('reverse', () => (
    <ArchiveReviewList reverse>Hello</ArchiveReviewList>
  ))
