import { connect } from 'react-redux'
import ReviewPostDetail from '../../components/pages/PostPage/molecules/ReviewPostDetail'
import * as actions from '../../store/PostPage/actions'

const mapStateToProps = (state) => {
  return {
    statefunction: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    PubStatusChange: (pubStatus) => {
      dispatch(actions.changePublicStatus(pubStatus))
    },
    onLoad: (reviewId) => {
      dispatch(actions.getPostReviewDetail(reviewId))
    },
    onChangeInput: (key, value) => {
      dispatch(actions.changeInput(key, value))
    },
    onPostSubmit: (reviewId, nickname, restId, eatWhen, tags, score,
      content, photo, publicStatus) => {
      dispatch(actions.postReview(reviewId, nickname, restId, eatWhen, tags, score,
        content, photo, publicStatus))
    },
    onUnmount: () => {
      dispatch(actions.clearState())
    },
    onConfirmRest: (restName, address, latitude, longitude) => {
      console.log('ReviewPost container onConfirmRest')
      console.log(restName)
      console.log(address)
      console.log(latitude)
      console.log(longitude)
      dispatch(actions.confirmRest(restName, address, latitude, longitude))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewPostDetail)
