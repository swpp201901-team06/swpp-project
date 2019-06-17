import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Main from './index'

describe('Main molecule test', () => {
  const onClickSignIn = jest.fn()
  const onClickGuest = jest.fn()
  const wrap = (props = {}) => shallow(<Main {...props} />)

  beforeEach(() => {
    onClickSignIn.mockReset()
    onClickGuest.mockReset()
  })

  it('matches snapshot', () => {
    const renderedValue = renderer.create(<Main />).toJSON()
    expect(renderedValue).toMatchSnapshot()
  })

  it('renders Main', () => {
    const wrapper = wrap()
    expect(wrapper.length).toEqual(1)
  })

  it('renders two MainButton\'s', () => {
    const wrapper = wrap()
    expect(wrapper.find('MainButton')).toHaveLength(2)
    expect(wrapper.find('MainButton').at(0).childAt(0).text()).toMatch('Login')
    expect(wrapper.find('MainButton').at(1).childAt(0).text()).toMatch('Guest')
  })

  it('calls onClickSignIn on clicking Sign In button', () => {
    const props = {
      onClickSignIn,
      onClickGuest,
    }
    const wrapper = wrap(props)
    wrapper.find('MainButton').at(0).simulate('click')
    expect(onClickSignIn).toHaveBeenCalled()
  })

  it('calls onClickGuest on clicking Guest button', () => {
    const props = {
      onClickSignIn,
      onClickGuest,
    }
    const wrapper = wrap(props)
    wrapper.find('MainButton').at(1).simulate('click')
    expect(onClickGuest).toHaveBeenCalled()
  })
})
