import { connect } from 'react-redux'
import Search from '../../components/molecules/ReviewMap/index'
// TODO: fix import path

const mapStateToProps = (state) => {
  return {
    reviewstate: state.ArchivePage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
