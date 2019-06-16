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

  it('matches snapshot when logged out', () => {
    const props = {
      statefunction: {
        SignInPage: {
          nickname: 'test_nickname',
          isLoggedIn: false,
        },
      },
    }
    const renderedValue = renderer.create(<SideBar {...props} />).toJSON()
    expect(renderedValue).toMatchSnapshot()
  })

  it('renders SideBar when logged in', () => {
    const props = {
      statefunction: {
        SignInPage: {
          nickname: 'test_nickname',
          isLoggedIn: true,
        },
      },
    }
    const wrapper = wrap(props)
    expect(wrapper.length).toEqual(1)
  })

  it('renders SideBar when logged out', () => {
    const props = {
      statefunction: {
        SignInPage: {
          nickname: 'test_nickname',
          isLoggedIn: false,
        },
      },
    }
    const wrapper = wrap(props)
    expect(wrapper.length).toEqual(1)
  })

  it('renders four SideBarButton\'s when logged in', () => {
    const props = {
      statefunction: {
        SignInPage: {
          nickname: 'test_nickname',
          isLoggedIn: true,
        },
      },
    }
    const wrapper = wrap(props)
    expect(wrapper.find('SideBarButton')).toHaveLength(4)
    expect(wrapper.find('SideBarButton').at(0).childAt(0).text()).toMatch('Guest Page')
    expect(wrapper.find('SideBarButton').at(1).childAt(0).text()).toMatch('Logout')
    expect(wrapper.find('SideBarButton').at(2).childAt(0).text()).toMatch('My Archive')
    expect(wrapper.find('SideBarButton').at(3).childAt(0).text()).toMatch('My Account')
  })

  it('renders a SideBarButton when logged out', () => {
    const props = {
      statefunction: {
        SignInPage: {
          nickname: 'test_nickname',
          isLoggedIn: false,
        },
      },
    }
    const wrapper = wrap(props)
    expect(wrapper.find('SideBarButton')).toHaveLength(1)
    expect(wrapper.find('SideBarButton').at(0).childAt(0).text()).toMatch('Sign In')
  })

  it('calls onClickMyArchive on clicking My Archive button', () => {
    const nickname = 'test_nickname'
    const props = {
      statefunction: {
        SignInPage: {
          nickname,
          isLoggedIn: true,
        },
      },
      onClickMyArchive,
    }
    const wrapper = wrap(props)
    wrapper.find('SideBarButton').at(2).simulate('click')
    expect(onClickMyArchive).toHaveBeenCalledWith(nickname)
  })

  // it('clear localStorage on logout', () => {
  //   // global.localStorage = {
  //   //   clear: jest.fn(),
  //   // }
  //   // global.location = {
  //   //   href: 'some_href',
  //   // }
  //   const props = {
  //     statefunction: {
  //       SignInPage: {
  //         nickname: 'test_nickname',
  //         isLoggedIn: true,
  //       },
  //     },
  //     onClickMyArchive,
  //   }
  //   const wrapper = wrap(props)
  //   wrapper.find('SideBarButton').at(1).simulate('click')
  //   // expect(global.localStorage.clear).toHaveBeenCalled()
  // })
})
