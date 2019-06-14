import { initialState } from './selectors'
import * as actions from './actions'

const mainReducer = (state, action) => {
  if (!state) {
    return initialState
  }
  return state
}

export default mainReducer
