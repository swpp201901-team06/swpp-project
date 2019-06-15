import React from 'react'
import { shallow } from 'enzyme'
import Main from './index'

describe('Main component test', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Main />)
  })

  it('renders Main', () => {
    expect(wrapper.length).toEqual(1)
  })

  it('renders two MainButton\'s', () => {
    expect(wrapper.find('MainButton')).toHaveLength(2)
    expect(wrapper.find('MainButton').at(0).childAt(0).text()).toMatch('Login')
    expect(wrapper.find('MainButton').at(1).childAt(0).text()).toMatch('Guest')
  })
})
