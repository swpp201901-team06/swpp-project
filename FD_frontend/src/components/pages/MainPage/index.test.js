import React from 'react'
import { shallow } from 'enzyme'
import MainPage from './index'


describe('MainPage component test', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<MainPage />)
  })

  it('renders MainPage', () => {
    expect(wrapper.length).toEqual(1)
  })

  test('renders Main molecule', () => {
    expect(wrapper.exists('Main')).toBe(true)
  })
})

