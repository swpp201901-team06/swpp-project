import React from 'react'
import { shallow } from 'enzyme'
import GuestSearch from '.'

const wrap = (props = {}) => shallow(<GuestSearch {...props} />)

it('placeholder test', () => {
  expect(0).toBe(0)
})

