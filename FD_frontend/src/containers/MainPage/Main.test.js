import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import Main, { mapStateToProps, mapDispatchToProps } from './Main'
import { GOTO_SIGN_IN, GOTO_GUEST } from '../../store/MainPage/actions'

describe('connected Main container test', () => {
  const initialState = {}
  const mockStore = configureStore()
  let store
  let wrapper

  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = mount(<Provider store={store}><Main /></Provider>)
  })

  it('render connected Main container', () => {
    expect(wrapper.find(Main).length).toEqual(1)
  })

  it('map dispatch to props', () => {
    const props = mapDispatchToProps(store.dispatch)
    props.onClickSignIn()
    props.onClickGuest()
    const actions = store.getActions()
    expect(actions[0].type).toEqual(GOTO_SIGN_IN)
    expect(actions[1].type).toEqual(GOTO_GUEST)
  })
})
