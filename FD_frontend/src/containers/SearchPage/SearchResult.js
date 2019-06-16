import { connect } from 'react-redux'
import { getSearchResults } from '../../store/SearchPage/actions'
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultList)
