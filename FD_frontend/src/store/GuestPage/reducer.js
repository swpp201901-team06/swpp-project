import * as actions from './actions'

const guestReducer = (state, action) => {
  let nextState = state
  if(!nextState) {
    nextState = {
      rankedReviews: []
    }
  }

  switch(action.type) {
    case actions.GET_POPULAR_REVIEWS_SUCCESS:
      return {
        ...nextState,
        rankedReviews: action.reviewList
      }
    default:
      return nextState
  }
}

export default guestReducer
