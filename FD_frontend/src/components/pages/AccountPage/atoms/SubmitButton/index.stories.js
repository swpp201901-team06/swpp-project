import React from 'react'
import { storiesOf } from '@kadira/storybook'
import SubmitButton from '.'

storiesOf('SubmitButton', module)
  .add('default', () => (
    <SubmitButton>Hello</SubmitButton>
  ))
  .add('reverse', () => (
    <SubmitButton reverse>Hello</SubmitButton>
  ))
  .add('another palette', () => (
    <SubmitButton palette="secondary">Hello</SubmitButton>
  ))
  .add('disabled', () => (
    <SubmitButton disabled>Hello</SubmitButton>
  ))
  .add('transparent', () => (
    <SubmitButton transparent>Hello</SubmitButton>
  ))
  .add('height', () => (
    <SubmitButton height={100}>Hello</SubmitButton>
  ))
  .add('link', () => (
    <SubmitButton href="https://github.com/diegohaz/arc">ARc repository</SubmitButton>
  ))
