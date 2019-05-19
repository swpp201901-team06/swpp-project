import React from 'react'
import { storiesOf } from '@kadira/storybook'
import PostButton from '.'

storiesOf('PostButton', module)
  .add('default', () => (
    <PostButton>Hello</PostButton>
  ))
  .add('reverse', () => (
    <PostButton reverse>Hello</PostButton>
  ))
  .add('another palette', () => (
    <PostButton palette="secondary">Hello</PostButton>
  ))
  .add('disabled', () => (
    <PostButton disabled>Hello</PostButton>
  ))
  .add('transparent', () => (
    <PostButton transparent>Hello</PostButton>
  ))
  .add('height', () => (
    <PostButton height={100}>Hello</PostButton>
  ))
  .add('link', () => (
    <PostButton href="https://github.com/diegohaz/arc">ARc repository</PostButton>
  ))
