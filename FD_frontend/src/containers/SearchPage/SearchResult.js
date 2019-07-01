import { connect } from 'react-redux'
import { getSearchResults, goToTargetArchive } from '../../store/SearchPage/actions'
import { storeReviewId } from '../../store/ArchivePage/actions'
import SearchResultList from '../../components/pages/SearchPage/molecules/SearchResultList'

const mapStateToProps = (state) => {
  return {
    statefunction: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestResults: (key, value) => {
      dispatch(getSearchResults(key, value))
    },
    onResultClick: (resultId, archiveOwnerNickname) => {
      dispatch(goToTargetArchive(resultId, archiveOwnerNickname))
    },
    sendResultId: (id) => {
      dispatch(storeReviewId(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultList)
