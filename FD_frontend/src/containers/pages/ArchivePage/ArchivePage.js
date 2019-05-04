import {connect} from 'react-redux'
import ArchivePage from '../../../components/pages/ArchivePage/index'

const mapStateToProps = (state, ownProps) => {
  console.log("containers/pages/ArchivePage/ArchivePage mapStateToProps 1")
  console.log(state)
  console.log(ownProps)
  console.log("containers/pages/ArchivePage/ArchivePage mapStateToProps 2")
  return {
    nickname: 'temp_nickname',
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log("containers/pages/ArchivePage/ArchivePage mapDispatchToProps 1")
  console.log(dispatch)
  console.log("containers/pages/ArchivePage/ArchivePage mapDispatchToProps 2")
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ArchivePage)
