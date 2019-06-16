import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import SideBar, { mapStateToProps, mapDispatchToProps } from './SideBar'
import { LOGOUT, GOTO_ARCHIVE_BUTTON } from '../../store/SideBar/actions'

describe('connected SideBar container test', () => {
  const initialState = {
    SignInPage: {
      nickname: 'test_nickname',
      isLoggedIn: false,
    },
  }
  const mockStore = configureStore()
  let store
  let wrapper

  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = mount(<Provider store={store}><SideBar /></Provider>)
  })

  it('render connected SideBar container', () => {
    expect(wrapper.find(SideBar).length).toEqual(1)
  })

  it('map state to props', () => {
    const props = mapStateToProps(initialState)
    expect(props.statefunction).toEqual(initialState)
  })

  it('map dispatch to props', () => {
    const props = mapDispatchToProps(store.dispatch)
    const nickname = 'test_nickname'
    props.onLogout()
    props.onClickMyArchive(nickname)
    const actions = store.getActions()
    expect(actions[0].type).toEqual(LOGOUT)
    expect(actions[1].type).toEqual(GOTO_ARCHIVE_BUTTON)
    expect(actions[1].nickname).toEqual(nickname)
  })
})
