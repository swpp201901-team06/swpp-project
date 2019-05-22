import { connect } from 'react-redux'
import { getReviewDetail, getReviewList, storeReviewId } from '../../store/ArchivePage/actions'
import ArchiveReviewList from '../../components/pages/ArchivePage/molecules/ArchiveReviewList'

const mapStateToProps = (state) => {
  console.log('ReviewList container mapStateToProps')
  console.log(state)
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
    },
    sendReviewId: (id) => {
      dispatch(storeReviewId(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArchiveReviewList)
