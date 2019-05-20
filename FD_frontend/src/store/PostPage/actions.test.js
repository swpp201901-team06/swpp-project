import * as actions from './actions'

describe('test post page actions', () => {
  it('should create GET_POST_REVIEW_DETAIL_REQUEST action', () => {
    const key1 = 420
    const expectedAction1 = {
      type: actions.GET_POST_REVIEW_DETAIL_REQUEST,
      reviewId: key1,
    }
    expect(actions.getPostReviewDetail(key1)).toEqual(expectedAction1)
  })

  it('should create GET_POST_REVIEW_DETAIL_SUCCESS action', () => {
    const {
      restId, eatWhen, tags, score, content, photo, publicStatus
    } = (
      100, '2020-01-01T01:11:11Z', 'some_tag', 10, 'some_content', 'some_photo', true
    )
    const expectedAction = {
      type: actions.GET_POST_REVIEW_DETAIL_SUCCESS,
      restId,
      eatWhen,
      tags,
      score,
      content,
      photo,
      publicStatus,
    }
    expect(actions.getPostReviewDetailSuccess(
      restId, eatWhen, tags, score, content, photo, publicStatus
    )).toEqual(expectedAction)
  })

  it('should create GET_POST_REVIEW_DETAIL_FAILED action', () => {
    const expectedAction = {
      type: actions.GET_POST_REVIEW_DETAIL_FAILED,
    }
    expect(actions.getPostReviewDetailFailed()).toEqual(expectedAction)
  })

  it('should create CHANGE_PUBLIC_STATUS action', () => {
    const publicStatus = true
    const expectedAction = {
      type: actions.CHANGE_PUBLIC_STATUS,
      publicStatus,
    }
    expect(actions.changePublicStatus(publicStatus)).toEqual(expectedAction)
    const publicStatus2 = false
    const expectedAction2 = {
      type: actions.CHANGE_PUBLIC_STATUS,
      publicStatus: publicStatus2,
    }
    expect(actions.changePublicStatus(publicStatus2)).toEqual(expectedAction2)
  })

  it('should create POST_REVIEW_REQUEST action', () => {
    const {
      reviewId, nickname, restId, eatWhen, tags, score, content, photo, publicStatus
    } = (
      420, 'some_nick', 100, '2020-01-01T01:11:11Z', 'some_tag',
      10, 'some_content', 'some_photo', true
    )
    const expectedAction = {
      type: actions.POST_REVIEW_REQUEST,
      reviewId,
      nickname,
      restId,
      eatWhen,
      tags,
      score,
      content,
      photo,
      publicStatus,
    }
    expect(actions.postReview(reviewId, nickname, restId, eatWhen, tags, score,
      content, photo, publicStatus)).toEqual(expectedAction)
  })

  it('should create POST_REVIEW_SUCCESS action', () => {
    const expectedAction = {
      type: actions.POST_REVIEW_SUCCESS,
    }
    expect(actions.postReviewSuccess()).toEqual(expectedAction)
  })

  it('should create POST_REVIEW_FAILED action', () => {
    const expectedAction = {
      type: actions.POST_REVIEW_FAILED,
    }
    expect(actions.postReviewFailed()).toEqual(expectedAction)
  })
})
