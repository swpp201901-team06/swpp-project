import { connect } from 'react-redux'
import ReviewPostDetail from '../../components/pages/PostPage/molecules/ReviewPostDetail'
import { getPostReviewDetail, postReview, changePublicStatus, changeInput, clearState } from '../../store/PostPage/actions'

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
    onChangeInput: (key, value) => {
      dispatch(changeInput(key, value))
    },
    onPostSubmit: (reviewId, nickname, restId, eatWhen, tags, score,
      content, photo, publicStatus) => {
      console.log('PostPage container onPostSUbmit')
      console.log(nickname)
      dispatch(postReview(reviewId, nickname, restId, eatWhen, tags, score,
        content, photo, publicStatus))
    },
    onUnmount: () => {
      dispatch(clearState())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewPostDetail)
