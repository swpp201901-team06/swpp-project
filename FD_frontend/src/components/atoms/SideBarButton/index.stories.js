import React from 'react'
import { storiesOf } from '@kadira/storybook'
import SideBarButton from '.'

storiesOf('SideBarButton', module)
  .add('default', () => (
    <SideBarButton>Hello</SideBarButton>
  ))
  .add('reverse', () => (
    <SideBarButton reverse>Hello</SideBarButton>
  ))
  .add('another palette', () => (
    <SideBarButton palette="secondary">Hello</SideBarButton>
  ))
  .add('disabled', () => (
    <SideBarButton disabled>Hello</SideBarButton>
  ))
  .add('transparent', () => (
    <SideBarButton transparent>Hello</SideBarButton>
  ))
  .add('height', () => (
    <SideBarButton height={100}>Hello</SideBarButton>
  ))
  .add('link', () => (
    <SideBarButton href="https://github.com/diegohaz/arc">ARc repository</SideBarButton>
  ))
