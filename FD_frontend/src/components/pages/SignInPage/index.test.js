import React from 'react'
import { shallow } from 'enzyme'
import SignInPage from '.'

describe('SignInPage component', () => {
  test('renders', () => {
    shallow(<SignInPage />)
  })
  test('renders SignIn molecule', () => {
    const renderOutput = shallow(<SignInPage />)
    expect(renderOutput.exists('SignIn')).toBe(true)
  })
})

