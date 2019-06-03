import React from 'react'
import { shallow } from 'enzyme'
import SearchPage from '.'

it('renders', () => {
  shallow(<SearchPage params={{ method: 'author', keyword: 'test' }} />)
})
