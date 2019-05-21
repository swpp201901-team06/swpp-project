import { connect } from 'react-redux'
import { SideBar } from '../../components/molecules/SideBar'
import { logOut } from '../../store/SideBar/actions'

const mapStateToProps = (state) =>{
  return {
    statefunction: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => {
      dispatch(logOut())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
