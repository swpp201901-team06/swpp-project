import {connect} from 'react-redux'
import {gotoSignUp, requestSignIn} from '../../../store/SignInPage/actions'
import SignIn from '../../../components/pages/SignInPage/molecules/SignIn'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickSignUp: () => {
      dispatch(gotoSignUp())
    },
    onClickSignIn: (id, password) => {
      dispatch(requestSignIn(id, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
