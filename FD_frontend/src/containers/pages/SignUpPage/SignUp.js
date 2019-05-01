import { connect } from 'react-redux'
import { signUp } from '../../../components/pages/SignUpPage/molecules/signUp'
import { emailCheck, nicknameCheck, signUpSubmit } from '../../../store/SignUpPage/actions'

const mapStateToProps = (state) => { 
    return {
	statefunction : state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    	onECheck: (email) => {
        	dispatch(emailCheck(email))
    	},
    	onNCheck: (nickname) => {
        	dispatch(nicknameCheck(nickname))
    	},
    	onSignUpSubmit: (email, pw, confirmpw, nickname) => {
        	dispatch(signUpSubmit(email, pw, confirmpw, nickname))
    	}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(signUp)
