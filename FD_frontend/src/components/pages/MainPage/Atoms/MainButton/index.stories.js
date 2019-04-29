import React from 'react'
import { storiesOf } from '@kadira/storybook'
import MainButton from '.'

storiesOf('MainButton', module)
  .add('default', () => (
    <MainButton>Hello</MainButton>
  ))
  .add('reverse', () => (
    <MainButton reverse>Hello</MainButton>
  ))
  .add('another palette', () => (
    <MainButton palette="secondary">Hello</MainButton>
  ))
  .add('disabled', () => (
    <MainButton disabled>Hello</MainButton>
  ))
  .add('transparent', () => (
    <MainButton transparent>Hello</MainButton>
  ))
  .add('height', () => (
    <MainButton height={100}>Hello</MainButton>
  ))
  .add('link', () => (
    <MainButton href="https://github.com/diegohaz/arc">ARc repository</MainButton>
  ))
