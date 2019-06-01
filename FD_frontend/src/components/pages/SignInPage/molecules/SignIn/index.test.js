import React from 'react'
import { shallow } from 'enzyme'
import SignIn from '.'

const wrap = (props = {}) => shallow(<SignIn {...props} />)
const onClickSignUp = jest.fn()
const onClickSignIn = jest.fn()
const dispatchGotoArchive = jest.fn()

describe('SignIn molecule test', () => {
  beforeEach(() => {
    onClickSignUp.mockReset()
    onClickSignIn.mockReset()
    dispatchGotoArchive.mockReset()
  })

  test('render normal signin page', () => {
    const isLoggedIn = false
    const signInFailed = false
    const nickname = ''
    const props = {
      isLoggedIn,
      signInFailed,
      nickname,
      onClickSignUp,
      onClickSignIn,
      dispatchGotoArchive,
    }
    const renderOutput = wrap(props)
    expect(renderOutput.find('input')).toHaveLength(2)
    expect(renderOutput.find('button')).toHaveLength(2)
    expect(renderOutput.find('div')).toHaveLength(5)
    expect(renderOutput.find('div').at(1).text()).toMatch('Email address')
    expect(renderOutput.find('div').at(2).text()).toMatch('Password')
    expect(renderOutput.find('div').at(3).text()).toMatch('Sign Up')
    expect(renderOutput.find('div').at(3).text()).toMatch('Sign In')
    expect(renderOutput.find('div').at(4).text()).not.toMatch('Failed')
  })

  test('render failed signin attempt', () => {
    const isLoggedIn = false
    const signInFailed = true
    const nickname = ''
    const props = {
      isLoggedIn,
      signInFailed,
      nickname,
      onClickSignUp,
      onClickSignIn,
      dispatchGotoArchive,
    }
    const renderOutput = wrap(props)
    expect(renderOutput.find('input')).toHaveLength(2)
    expect(renderOutput.find('button')).toHaveLength(2)
    expect(renderOutput.find('div')).toHaveLength(5)
    expect(renderOutput.find('div').at(1).text()).toMatch('Email address')
    expect(renderOutput.find('div').at(2).text()).toMatch('Password')
    expect(renderOutput.find('div').at(3).text()).toMatch('Sign Up')
    expect(renderOutput.find('div').at(3).text()).toMatch('Sign In')
    expect(renderOutput.find('div').at(4).text()).toMatch('Failed')
  })

  test('do not call onClickSignIn if email is not typed', () => {
    const isLoggedIn = false
    const signInFailed = true
    const nickname = ''
    const props = {
      isLoggedIn,
      signInFailed,
      nickname,
      onClickSignUp,
      onClickSignIn,
      dispatchGotoArchive,
    }
    const renderOutput = wrap(props)

    const email = ''
    const password = 'some_password'
    const emailField = renderOutput.find('input').at(0).getElement()
    emailField.ref({ value: email })
    const passwordField = renderOutput.find('input').at(1).getElement()
    passwordField.ref({ value: password })
    renderOutput.find('button').at(1).simulate('click')
    expect(onClickSignIn).not.toHaveBeenCalled()
  })

  test('do not call onClickSignIn if password is not typed', () => {
    const isLoggedIn = false
    const signInFailed = true
    const nickname = ''
    const props = {
      isLoggedIn,
      signInFailed,
      nickname,
      onClickSignUp,
      onClickSignIn,
      dispatchGotoArchive,
    }
    const renderOutput = wrap(props)

    const email = 'some_email@github.com'
    const password = ''
    const emailField = renderOutput.find('input').at(0).getElement()
    emailField.ref({ value: email })
    const passwordField = renderOutput.find('input').at(1).getElement()
    passwordField.ref({ value: password })
    renderOutput.find('button').at(1).simulate('click')
    expect(onClickSignIn).not.toHaveBeenCalled()
  })

  test('do not call onClickSignIn if neither email nor password is typed', () => {
    const isLoggedIn = false
    const signInFailed = true
    const nickname = ''
    const props = {
      isLoggedIn,
      signInFailed,
      nickname,
      onClickSignUp,
      onClickSignIn,
      dispatchGotoArchive,
    }
    const renderOutput = wrap(props)

    const email = ''
    const password = ''
    const emailField = renderOutput.find('input').at(0).getElement()
    emailField.ref({ value: email })
    const passwordField = renderOutput.find('input').at(1).getElement()
    passwordField.ref({ value: password })
    renderOutput.find('button').at(1).simulate('click')
    expect(onClickSignIn).not.toHaveBeenCalled()
  })

  test('button click with both credentials typed', () => {
    const isLoggedIn = false
    const signInFailed = true
    const nickname = ''
    const props = {
      isLoggedIn,
      signInFailed,
      nickname,
      onClickSignUp,
      onClickSignIn,
      dispatchGotoArchive,
    }
    const renderOutput = wrap(props)

    const email = 'some_email@github.com'
    const password = 'some_password'
    const emailField = renderOutput.find('input').at(0).getElement()
    emailField.ref({ value: email })
    const passwordField = renderOutput.find('input').at(1).getElement()
    passwordField.ref({ value: password })
    renderOutput.find('button').at(1).simulate('click')
    expect(onClickSignIn).toHaveBeenCalled()
  })

  test('call onClickSignUp when signup button is clicked', () => {
    const isLoggedIn = false
    const signInFailed = true
    const nickname = ''
    const props = {
      isLoggedIn,
      signInFailed,
      nickname,
      onClickSignUp,
      onClickSignIn,
      dispatchGotoArchive,
    }
    const renderOutput = wrap(props)
    renderOutput.find('button').at(0).simulate('click')
    expect(onClickSignUp).toHaveBeenCalled()
  })

  test('go to archive when already logged in', () => {
    const isLoggedIn = true
    const signInFailed = false
    const nickname = 'test_nickname'
    const props = {
      isLoggedIn,
      signInFailed,
      nickname,
      onClickSignUp,
      onClickSignIn,
      dispatchGotoArchive,
    }
    wrap(props)
    expect(dispatchGotoArchive).toHaveBeenCalled()
  })

  test('render nothing when already logged in', () => {
    const isLoggedIn = true
    const signInFailed = false
    const nickname = 'test_nickname'
    const props = {
      isLoggedIn,
      signInFailed,
      nickname,
      onClickSignUp,
      onClickSignIn,
      dispatchGotoArchive,
    }
    const renderOutput = wrap(props)
    expect(renderOutput.isEmptyRender()).toBe(true)
  })
})
