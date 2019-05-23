import { connect } from 'react-redux'
import { getReviewDetail, deleteReview } from '../../store/ArchivePage/actions'
import ArchiveReviewDetail from '../../components/pages/ArchivePage/molecules/ArchiveReviewDetail/index'

const mapStateToProps = (state) => {
  console.log('ReviewDetail molecule mapStateToProps')
  console.log(state)
  return {
    reviewstate: state.ArchivePage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSelectedReview: (reviewId) => {
      dispatch(getReviewDetail(reviewId))
    },
    onDeleteReview: (reviewId, nickname) => {
      dispatch(deleteReview(reviewId, nickname))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArchiveReviewDetail)
