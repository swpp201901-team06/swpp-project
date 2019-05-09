import { connect } from 'react-redux'
import { SideBar } from '../../components/molecules/SideBar'
import * as actions from '../../store/SideBar/actions'

const mapStateToProps = (state) =>{
  return {
    statefunction: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogOut: () => {
      dispatch(logOut())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
