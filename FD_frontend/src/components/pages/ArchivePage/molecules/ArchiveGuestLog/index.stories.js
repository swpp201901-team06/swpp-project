import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ArchiveGuestLog } from 'components'

storiesOf('ArchiveGuestLog', module)
  .add('default', () => (
    <ArchiveGuestLog>Hello</ArchiveGuestLog>
  ))
  .add('reverse', () => (
    <ArchiveGuestLog reverse>Hello</ArchiveGuestLog>
  ))
