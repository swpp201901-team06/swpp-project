import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { MainPage } from 'components'

storiesOf('MainPage', module)
  .add('default', () => (
    <MainPage />
  ))
