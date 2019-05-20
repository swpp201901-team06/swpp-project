import React from 'react'
import { storiesOf } from '@kadira/storybook'
import PubStatusButton from '.'

storiesOf('PubStatusButton', module)
  .add('default', () => (
    <PubStatusButton>Hello</PubStatusButton>
  ))
  .add('reverse', () => (
    <PubStatusButton reverse>Hello</PubStatusButton>
  ))
  .add('another palette', () => (
    <PubStatusButton palette="secondary">Hello</PubStatusButton>
  ))
  .add('disabled', () => (
    <PubStatusButton disabled>Hello</PubStatusButton>
  ))
  .add('transparent', () => (
    <PubStatusButton transparent>Hello</PubStatusButton>
  ))
  .add('height', () => (
    <PubStatusButton height={100}>Hello</PubStatusButton>
  ))
  .add('link', () => (
    <PubStatusButton href="https://github.com/diegohaz/arc">ARc repository</PubStatusButton>
  ))
