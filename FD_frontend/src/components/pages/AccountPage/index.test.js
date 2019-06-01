import React from 'react'
import { shallow } from 'enzyme'
import AccountPage from '.'

it('renders', () => {
  shallow(<AccountPage params={{ nickname: 'some_nickname' }} />)
})
