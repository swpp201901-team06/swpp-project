import { connect } from 'react-redux'
import { getReviewDetail, getReviewList, storeReviewId, followArchive } from '../../store/ArchivePage/actions'
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
    requestReviews: (sortOption, archiveOwnerNickname) => {
      dispatch(getReviewList(sortOption, archiveOwnerNickname))
    },
    sendReviewId: (id) => {
      dispatch(storeReviewId(id))
    },
    doFollow: (archiveOwner) => {
      dispatch(followArchive(archiveOwner))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArchiveReviewList)
