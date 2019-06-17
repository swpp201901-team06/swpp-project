import { connect } from 'react-redux'
import { SideBar } from '../../components/molecules/SideBar'
import { logOut, gotoArchiveButton } from '../../store/SideBar/actions'

export const mapStateToProps = (state) => {
  return {
    statefunction: state,
  }
}

export const mapDispatchToProps = (dispatch) => {
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
