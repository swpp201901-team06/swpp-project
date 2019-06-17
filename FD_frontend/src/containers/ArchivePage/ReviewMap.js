import { connect } from 'react-redux'
import ReviewMap from '../../components/pages/ArchivePage/molecules/ArchiveReviewDetail/index'
// TODO: fix import path

const mapStateToProps = (state) => {
  return {
    reviewstate: state.ArchivePage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewMap)
