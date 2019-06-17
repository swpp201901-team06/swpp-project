import { connect } from 'react-redux'
import GoogleMap from '../../components/atoms/GoogleMap/index'

const mapStateToProps = (state) => {
  return {
    reviewstate: state.ArchivePage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleMap)
