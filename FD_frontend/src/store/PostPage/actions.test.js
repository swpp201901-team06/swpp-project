import * as actions from './actions'

describe('test actions', () => {
  it('should create GET_POST_REVIEW_DETAIL_REQUEST action', () => {
    const key1 = reviewId
    const expectedAction1 = {
      type: actions.GET_POST_REVIEW_DETAIL_REQUEST,
      reviewId: key1
    }
    expect(actions.getPostReviewDetail(key1)).toEqual(expectedAction1)
  })
  it('should create GET_POST_REVIEW_DETAIL_SUCCESS action', () => {
