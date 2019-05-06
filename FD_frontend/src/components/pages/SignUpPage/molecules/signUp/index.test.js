import React from 'react'
import { shallow, mount, dive } from 'enzyme'
import { signUp as SignUp } from './'
import configureStore from 'redux-mock-store'
import DCButton from '../../atoms/DCButton'
import SubmitButton from '../../atoms/SubmitButton'

const initialState = {};
const mockStore = configureStore();
describe('<signUp />', () => {
  let wrapper;

  describe('When DCButton is pressed', () => {
    it('should call the mock duplicate check function', () => {
      const mockDCfn = jest.fn();
      const mockDuplicateCheck = jest.fn();
      const mockSignUpSubmit = jest.fn();
      const mockHandleChange = jest.fn();
      const props = { statefunction: {SignUpPage: {emailText: '', usernameText: '',}}, onDuplicateCheck: mockDuplicateCheck, onSignUpSubmit: mockSignUpSubmit, handleChange: mockHandleChange };
      wrapper = mount(<SignUp {...props} />);
      wrapper.find(DCButton).at(0).simulate('click', {preventDefault() {}});
      expect(mockDuplicateCheck.mock.calls.length).toBe(1);

      wrapper.find(DCButton).at(1).simulate('click', {preventDefault() {}});
      expect(mockDuplicateCheck.mock.calls.length).toBe(2);
    });
  });
  describe('When Submit is pressed', () => {
    it('should call the mock submit function', () => {
      const mockDCfn = jest.fn();
      const mockDuplicateCheck = jest.fn();
      const mockSignUpSubmit = jest.fn();
      const mockHandleChange = jest.fn();
      const props = { statefunction: {SignUpPage: {emailText: '', usernameText: '',}}, onDuplicateCheck: mockDuplicateCheck, onSignUpSubmit: mockSignUpSubmit, handleChange: mockHandleChange };
      wrapper = mount(<SignUp {...props} />);
      wrapper.find(SubmitButton).simulate('click', {preventDefault() {}});
      expect(mockSignUpSubmit.mock.calls.length).toBe(1);
    });
  });
});
