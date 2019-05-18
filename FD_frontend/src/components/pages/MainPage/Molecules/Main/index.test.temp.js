import React from 'react'
import { shallow } from 'enzyme'
import Main from './index'

const wrap = (props = {}) => shallow(<Main {...props} />)
/*
it('renders children when passed in', () => {
  console.log('mainpage test 1')
  const wrapper = wrap({ children: 'test' })
  console.log('mainpage test 2')
  console.log(wrapper)
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
*/
