import * as actions from './actions'

const searchReducer = (state, action) => {
  let nextState = state
  if(!nextState) {
    nextState = {
      results: []
    }
  }

  switch (action.type) {
    case actions.GET_RESULTS_SUCCESS:
      return {
        ...nextState,
        results: action.resultList,
      }
    default:
      return nextState
  }
}

export default searchReducer
