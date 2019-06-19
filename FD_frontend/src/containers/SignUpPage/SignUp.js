import { connect } from 'react-redux'
import { signUp } from '../../components/pages/SignUpPage/molecules/signUp'
import { duplicateCheck, signUpSubmit, phoneRequest, phoneAuthRequest, cancelSignUp } from '../../store/SignUpPage/actions'

const mapStateToProps = (state) => {
  return {
    statefunction: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDuplicateCheck: (key, value) => {
      dispatch(duplicateCheck(key, value))
    },
    onSignUpSubmit: (email, pw, confirmpw, nickname, phoneNumber) => {
      dispatch(signUpSubmit(email, pw, confirmpw, nickname, phoneNumber))
    },
    handleChange: (key, value) => {
      dispatch(duplicateCheck(key, value))
    },
    onPhoneAuthRequest: ( number ) => {
      dispatch(phoneRequest(number))
    },
    onPhoneAuthSubmit: (input, code, phoneNumber) => {
      dispatch(phoneAuthRequest(input, code, phoneNumber))
    },
    onSignUpCancel: () => {
      dispatch(cancelSignUp())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(signUp)
