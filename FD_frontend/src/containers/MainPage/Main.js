import { connect } from 'react-redux'
import Main from '../../components/pages/MainPage/Molecules/Main/index'
import { gotoSignIn, gotoGuest } from '../../store/MainPage/actions'

export const mapStateToProps = (state) => {
  return {
    statefunction: state,
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    onClickSignIn: () => {
      dispatch(gotoSignIn())
    },
    onClickGuest: () => {
      dispatch(gotoGuest())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
