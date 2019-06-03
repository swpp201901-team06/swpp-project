import React from 'react'
import { storiesOf } from '@kadira/storybook'
import SearchButton from '.'

storiesOf('SearchButton', module)
  .add('default', () => (
    <SearchButton>Hello</SearchButton>
  ))
  .add('reverse', () => (
    <SearchButton reverse>Hello</SearchButton>
  ))
  .add('another palette', () => (
    <SearchButton palette="secondary">Hello</SearchButton>
  ))
  .add('disabled', () => (
    <SearchButton disabled>Hello</SearchButton>
  ))
  .add('transparent', () => (
    <SearchButton transparent>Hello</SearchButton>
  ))
  .add('height', () => (
    <SearchButton height={100}>Hello</SearchButton>
  ))
  .add('link', () => (
    <SearchButton href="https://github.com/diegohaz/arc">ARc repository</SearchButton>
  ))
