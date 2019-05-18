import { connect } from 'react-redux'
import { gotoSignUp, requestSignIn, gotoArchive } from '../../store/SignInPage/actions'
import SignIn from '../../components/pages/SignInPage/molecules/SignIn'

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.SignInPage.isLoggedIn,
    signInFailed: state.SignInPage.signInFailed,
    nickname: state.SignInPage.nickname,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickSignUp: () => {
      dispatch(gotoSignUp())
    },
    onClickSignIn: (email, password) => {
      dispatch(requestSignIn(email, password))
    },
    dispatchGotoArchive: (nickname) => {
      dispatch(gotoArchive(nickname))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
