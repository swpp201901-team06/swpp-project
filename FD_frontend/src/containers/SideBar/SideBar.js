import { connect } from 'react-redux'
import { SideBar } from '../../components/molecules/SideBar'
import { logOut, gotoArchiveButton, gotoAccountButton } from '../../store/SideBar/actions'

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
    onClickMyAccount: (nickname) => {
      dispatch(gotoAccountButton(nickname))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
