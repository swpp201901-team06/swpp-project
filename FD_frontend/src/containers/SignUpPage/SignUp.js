import { connect } from 'react-redux'
import { signUp } from '../../components/pages/SignUpPage/molecules/signUp'
import { duplicateCheck, signUpSubmit, phoneRequest, phoneAuthRequest } from '../../store/SignUpPage/actions'

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
    onSignUpSubmit: (email, pw, confirmpw, nickname) => {
      dispatch(signUpSubmit(email, pw, confirmpw, nickname))
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(signUp)
