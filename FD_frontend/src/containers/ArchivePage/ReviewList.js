import { connect } from 'react-redux'
import { getReviewDetail } from '../../store/ArchivePage/actions'
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArchiveReviewList)
