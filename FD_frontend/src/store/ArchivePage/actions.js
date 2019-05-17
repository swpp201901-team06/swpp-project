export const REVIEW_DETAIL_REQUEST = 'REVIEW_DETAIL_REQUEST'
export const DELETE_REVIEW_REQUEST = 'DELETE_REVIEW_REQUEST'
export const EDIT_REVIEW_REQUEST = 'EDIT_REVIEW_REQUEST'

export const getReviewDetail = (id) => {
  return {
    type: REVIEW_DETAIL_REQUEST,
    id
  }
}

export const deleteReview = (review) => {
	return {
		type: DELETE_REVIEW_REQUEST,
		review
	}
}

export const editReview = (review) => {
	return {
		type: EDIT_REVIEW_REQUEST,
		review
	}
}

