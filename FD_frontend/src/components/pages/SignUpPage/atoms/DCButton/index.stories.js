import React from 'react'
import { storiesOf } from '@kadira/storybook'
import DCButton from '.'

storiesOf('DCButton', module)
  .add('default', () => (
    <DCButton>Hello</DCButton>
  ))
  .add('reverse', () => (
    <DCButton reverse>Hello</DCButton>
  ))
  .add('another palette', () => (
    <DCButton palette="secondary">Hello</DCButton>
  ))
  .add('disabled', () => (
    <DCButton disabled>Hello</DCButton>
  ))
  .add('transparent', () => (
    <DCButton transparent>Hello</DCButton>
  ))
  .add('height', () => (
    <DCButton height={100}>Hello</DCButton>
  ))
  .add('link', () => (
    <DCButton href="https://github.com/diegohaz/arc">ARc repository</DCButton>
  ))
