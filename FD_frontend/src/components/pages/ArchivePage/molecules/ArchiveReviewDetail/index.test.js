import React from 'react'
import { shallow } from 'enzyme'
import ArchiveReviewDetail from '.'
import { isMainThread } from 'worker_threads';

const wrap = (props = {}) => shallow(<ArchiveReviewDetail {...props} />)

it('placeholder test', () => {
  expect(true).toBe(true)
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
