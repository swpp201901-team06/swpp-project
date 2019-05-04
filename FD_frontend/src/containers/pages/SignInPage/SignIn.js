import {connect} from 'react-redux'
import {gotoSignUp, requestSignIn} from '../../../store/SignInPage/actions'
import SignIn from '../../../components/pages/SignInPage/molecules/SignIn'
import {baseHistory} from '../../../index'

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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
