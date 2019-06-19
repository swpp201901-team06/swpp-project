import React from 'react'
import { storiesOf } from '@kadira/storybook'
import FollowButton from '.'

storiesOf('FollowButton', module)
  .add('default', () => (
    <FollowButton>Hello</FollowButton>
  ))
  .add('reverse', () => (
    <FollowButton reverse>Hello</FollowButton>
  ))
  .add('another palette', () => (
    <FollowButton palette="secondary">Hello</FollowButton>
  ))
  .add('disabled', () => (
    <FollowButton disabled>Hello</FollowButton>
  ))
  .add('transparent', () => (
    <FollowButton transparent>Hello</FollowButton>
  ))
  .add('height', () => (
    <FollowButton height={100}>Hello</FollowButton>
  ))
  .add('link', () => (
    <FollowButton href="https://github.com/diegohaz/arc">ARc repository</FollowButton>
  ))
