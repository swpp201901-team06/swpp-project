import React from 'react'
import { shallow } from 'enzyme'
import DateTimeInput from '.'

const wrap = (props = {}) => shallow(<DateTimeInput {...props} />)

it('placeholder test', () => {
  expect(true).toBe(true)
})