import React from 'react'
import { mount } from 'enzyme'
import { debounce } from 'lodash'
import { signUp as SignUp } from './'
// import configureStore from 'redux-mock-store'
// import DCButton from '../../atoms/DCButton'
import SubmitButton from '../../atoms/SubmitButton'

// const initialState = {}
// const mockStore = configureStore()
describe('signUp molecule test', () => {
  describe('When DCButton is pressed', () => {
    it('should call the mock duplicate check function', () => {
      // const mockDCfn = jest.fn()
      const mockDuplicateCheck = jest.fn()
      const mockSignUpSubmit = jest.fn()
      const mockHandleChange = jest.fn()
      const props = {
        statefunction: {
          SignUpPage: {
            emailText: '',
            usernameText: '',
          },
        },
        onDuplicateCheck: mockDuplicateCheck,
        onSignUpSubmit: mockSignUpSubmit,
        handleChange: mockHandleChange,
      }
      jest.useFakeTimers()
      const wrapper = mount(<SignUp {...props} />)
      const emailInput = wrapper.find('input').at(0)
      emailInput.instance().value = 'test_email@github.com'
      emailInput.simulate('change')
      jest.runTimersToTime(1000)
      expect(mockHandleChange.mock.calls.length).toBe(1)

      // wrapper.find('input').at(1).simulate('change', { preventDefault() {} })
      // expect(mockHandleChange.mock.calls.length).toBe(2)
    })
  })
  describe('When Submit is pressed', () => {
    it('should call the mock submit function', () => {
      // const mockDCfn = jest.fn();
      const mockDuplicateCheck = jest.fn()
      const mockSignUpSubmit = jest.fn()
      const mockHandleChange = jest.fn()
      const props = {
        statefunction: {
          SignUpPage: {
            emailText: '',
            usernameText: '',
          }
        },
        onDuplicateCheck: mockDuplicateCheck,
        onSignUpSubmit: mockSignUpSubmit,
        handleChange: mockHandleChange,
      }
      const wrapper = mount(<SignUp {...props} />)
      wrapper.find(SubmitButton).simulate('click', { preventDefault() {} })
      expect(mockSignUpSubmit.mock.calls.length).toBe(1)
    })
  })
})

