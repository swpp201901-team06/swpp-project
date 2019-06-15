import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { SideBar } from './index'

describe('SideBar molecule test', () => {
  const onClickMyArchive = jest.fn()
  const wrap = (props = {}) => shallow(<SideBar {...props} />)

  beforeEach(() => {
    onClickMyArchive.mockClear()
  })

  it('matches snapshot when logged in', () => {
    const props = {
      statefunction: {
        SignInPage: {
          nickname: 'test_nickname',
          isLoggedIn: true,
        },
      },
    }
    const renderedValue = renderer.create(<SideBar {...props} />).toJSON()
    expect(renderedValue).toMatchSnapshot()
  })
})
