import React from 'react'
import { storiesOf } from '@kadira/storybook'
import RestConfirmButton from '.'

storiesOf('RestConfirmButton', module)
  .add('default', () => (
    <RestConfirmButton>Hello</RestConfirmButton>
  ))
  .add('reverse', () => (
    <RestConfirmButton reverse>Hello</RestConfirmButton>
  ))
  .add('another palette', () => (
    <RestConfirmButton palette="secondary">Hello</RestConfirmButton>
  ))
  .add('disabled', () => (
    <RestConfirmButton disabled>Hello</RestConfirmButton>
  ))
  .add('transparent', () => (
    <RestConfirmButton transparent>Hello</RestConfirmButton>
  ))
  .add('height', () => (
    <RestConfirmButton height={100}>Hello</RestConfirmButton>
  ))
  .add('link', () => (
    <RestConfirmButton href="https://github.com/diegohaz/arc">ARc repository</RestConfirmButton>
  ))
