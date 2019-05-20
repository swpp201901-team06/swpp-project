import { connect } from 'react-redux'
import ReviewPostDetail from '../../components/pages/PostPage/molecules/ReviewPostDetail'
import { getPostReviewDetail, postReview, changePublicStatus } from '../../store/PostPage/actions'

const mapStateToProps = (state) => {
  return {
    statefunction: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    PubStatusChange: (pubStatus) => {
      dispatch(changePublicStatus(pubStatus))
    },
    onLoad: (reviewId) => {
      dispatch(getPostReviewDetail(reviewId))
    },
    onPostSubmit: (reviewId, nickname, restId, eatWhen, tags, score,
      content, photo, publicStatus) => {
      dispatch(postReview(reviewId, nickname, restId, eatWhen, tags, score,
        content, photo, publicStatus))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewPostDetail)
