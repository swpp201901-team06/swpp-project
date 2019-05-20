import { connect } from 'react-redux'
import { deleteReview, gotoEditReview } from '../../store/ArchivePage/actions'
import ArchiveReviewDetail from '../../components/pages/ArchivePage/molecules/ArchiveReviewDetail/index'

const mapStateToProps = (state) => {
  return {
    reviewId: state.ArchivePage.selectedReviewId,
    reviewObj: state.ArchivePage.selectedReviewObj,
    isLoggedIn: state.ArchivePage.isLoggedIn,
    userNickname: state.ArchivePage.userNickname,
    archiveOwnerNickname: state.ArchivePage.archiveOwnerNickname,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteReview: (reviewId, archiveOwnerNickname) => {
      dispatch(deleteReview(reviewId, archiveOwnerNickname))
    },
    /*
    onEditReview: (reviewId) => {
      dispatch(gotoEditReview(reviewId))
    },
    */
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArchiveReviewDetail)
