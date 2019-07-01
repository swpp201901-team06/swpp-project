import { connect } from 'react-redux'
import { getPopularReviews } from '../../store/GuestPage/actions'
import { getSearchResults, goToTargetArchive } from '../../store/SearchPage/actions'
import { storeReviewId } from '../../store/ArchivePage/actions'
import { UserRankings } from '../../components/pages/GuestPage/molecules/UserRankings'

const mapStateToProps = (state) => {
  return {
    statefunction: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestPopularReviews: () => {
      dispatch(getPopularReviews())
    },
    onResultClick: (resultId, archiveOwnerNickname) => {
      dispatch(goToTargetArchive(resultId, archiveOwnerNickname))
    },
    sendResultId: (id) => {
      dispatch(storeReviewId(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRankings)
