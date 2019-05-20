import React from 'react'
import { storiesOf } from '@kadira/storybook'
import PostSubmitButton from '.'

storiesOf('PostSubmitButton', module)
  .add('default', () => (
    <PostSubmitButton>Hello</PostSubmitButton>
  ))
  .add('reverse', () => (
    <PostSubmitButton reverse>Hello</PostSubmitButton>
  ))
  .add('another palette', () => (
    <PostSubmitButton palette="secondary">Hello</PostSubmitButton>
  ))
  .add('disabled', () => (
    <PostSubmitButton disabled>Hello</PostSubmitButton>
  ))
  .add('transparent', () => (
    <PostSubmitButton transparent>Hello</PostSubmitButton>
  ))
  .add('height', () => (
    <PostSubmitButton height={100}>Hello</PostSubmitButton>
  ))
  .add('link', () => (
    <PostSubmitButton href="https://github.com/diegohaz/arc">ARc repository</PostSubmitButton>
  ))
