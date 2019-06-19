import { connect } from 'react-redux'
import ReviewMap from '../../components/molecules/ReviewMap'

const mapStateToProps = (state) => {
  return {
    reviewstate: state.ArchivePage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewMap)
