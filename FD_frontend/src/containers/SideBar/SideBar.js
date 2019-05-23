import { connect } from 'react-redux'
import { SideBar } from '../../components/molecules/SideBar'
import { logOut, gotoArchiveButton } from '../../store/SideBar/actions'

const mapStateToProps = (state) =>{
  return {
    statefunction: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => {
      dispatch(logOut())
    },
    onClickMyArchive: (nickname) => {
      dispatch(gotoArchiveButton(nickname))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
