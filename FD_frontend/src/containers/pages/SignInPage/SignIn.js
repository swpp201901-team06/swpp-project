import {connect} from 'react-redux'
import {gotoSignUp, requestSignIn} from '../../../store/SignInPage/actions'
import SignIn from '../../../components/pages/SignInPage/molecules/SignIn'

const mapStateToProps = (state) => {
  console.log("containers/pages/SignInPage/SignIn mapStateToProps 1")
  console.log(state)
  console.log("containers/pages/SignInPage/SignIn mapStateToProps 2")
  return {}
}

const mapDispatchToProps = (dispatch) => {
  console.log("containers/pages/SignInPage/SignIn mapDispatchToProps 1")
  console.log(dispatch)
  console.log("containers/pages/SignInPage/SignIn mapDispatchToProps 2")
  return {
    onClickSignUp: () => {
      console.log("containers/pages/SignInPage/SignIn mapDispatchToProps onClickSignUp 1")
      dispatch(gotoSignUp())
    },
    onClickSignIn: (id, password) => {
      console.log("containers/pages/SignInPage/SignIn mapDispatchToProps onClickSignIn 1")
      console.log(id)
      console.log(password)
      console.log("containers/pages/SignInPage/SignIn mapDispatchToProps onClickSignIn 2")
      dispatch(requestSignIn(id, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
