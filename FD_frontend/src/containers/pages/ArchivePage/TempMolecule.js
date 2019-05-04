import {connect} from 'react-redux'
import TempMolecule from '../../../components/pages/ArchivePage/temp/index'

const mapStateToProps = (state, ownProps) => {
  console.log("containers/pages/ArchivePage/TempMolecule mapStateToProps 1")
  console.log(state)
  console.log(ownProps)
  console.log("containers/pages/ArchivePage/TempMolecule mapStateToProps 2")
  return {
    nickname: 'temp_nickname',
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log("containers/pages/ArchivePage/TempMolecule mapDispatchToProps 1")
  console.log(dispatch)
  console.log("containers/pages/ArchivePage/TempMolecule mapDispatchToProps 2")
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TempMolecule)
