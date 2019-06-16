import React from 'react'
import { shallow } from 'enzyme'
import Main from './index'

const wrap = (props = {}) => shallow(<Main {...props} />)
