import React from 'react'
import { storiesOf } from '@kadira/storybook'
import DetailButton from '.'

storiesOf('DetailButton', module)
  .add('default', () => (
    <DetailButton>Hello</DetailButton>
  ))
  .add('reverse', () => (
    <DetailButton reverse>Hello</DetailButton>
  ))
  .add('another palette', () => (
    <DetailButton palette="secondary">Hello</DetailButton>
  ))
  .add('disabled', () => (
    <DetailButton disabled>Hello</DetailButton>
  ))
  .add('transparent', () => (
    <DetailButton transparent>Hello</DetailButton>
  ))
  .add('height', () => (
    <DetailButton height={100}>Hello</DetailButton>
  ))
  .add('link', () => (
    <DetailButton href="https://github.com/diegohaz/arc">ARc repository</DetailButton>
  ))
