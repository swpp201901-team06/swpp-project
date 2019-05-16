import React from 'react'
import { shallow } from 'enzyme'
import SignIn from '.'
import { isIterable } from 'core-js';

const wrap = (props = {}) => shallow(<SignIn {...props} />)

it('test', () => {
  console.log('test test')
  expect(1).toBe(1)
})

/*
it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
*/
