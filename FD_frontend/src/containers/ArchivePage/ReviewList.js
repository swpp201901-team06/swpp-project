import { connect } from 'react-redux'
import { getReviewDetail, getReviewList } from '../../store/ArchivePage/actions'
import ArchiveReviewList from '../../components/pages/ArchivePage/molecules/ArchiveReviewList'

const mapStateToProps = (state) => {
  return {
    statefunction: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onReviewClick: (reviewId, archiveOwnerNickname) => {
      dispatch(getReviewDetail(reviewId, archiveOwnerNickname))
    },
    requestReviews: (archiveOwnerNickname) => {
      dispatch(getReviewList(archiveOwnerNickname))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArchiveReviewList)
