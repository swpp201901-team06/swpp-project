import React from 'react'
import { shallow } from 'enzyme'
import SubmitButton from '.'

const wrap = (props = {}) => shallow(<SubmitButton {...props} />).dive()

it('renders with different combination of props', () => {
  wrap({ disabled: true })
  wrap({ transparent: true })
  wrap({ disabled: true, transparent: true })
})

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ type: 'submit' })
  expect(wrapper.find({ type: 'submit' })).toHaveLength(1)
})

it('renders button by default', () => {
  const wrapper = wrap()
  expect(wrapper.find('button')).toHaveLength(1)
})

it('renders anchor when href is passed in', () => {
  const wrapper = wrap({ href: 'test' })
  expect(wrapper.find('a')).toHaveLength(1)
})

it('renders Link when to is passed in', () => {
  const wrapper = wrap({ to: 'test' }).dive()
  expect(wrapper.find('Link')).toHaveLength(1)
})

describe('<SubmitButton />', () => {
  describe('onClick()', () => {
    test('succesfully calls the onClick handler', () => {
      const mockOnClick = jest.fn();
      const wrapper = shallow(<SubmitButton onClick = {mockOnClick} />);
      const component = wrapper.dive();
      component.find('button').simulate('click');
      expect(mockOnClick.mock.calls.length).toEqual(1);
    });
  });
});

