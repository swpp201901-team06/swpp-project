import {connect} from 'react-redux'
import { deleteReview, editReview } from '../../store/ArchivePage/actions
import ArchiveReviewDetail from '../../components/pages/ArchivePage/molecules/ArchiveReviewDetail'

const mapStateToProps = (state) => {
  return {
    review: state.ArchivePage.currentreview
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteReview: (review) => {
      dispatch(deleteReview(review))
    }
    onEditReview: (review) => {
      dispatch(editReview(review))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArchiveReviewDetail)
