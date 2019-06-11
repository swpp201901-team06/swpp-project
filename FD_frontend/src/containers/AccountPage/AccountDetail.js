import { connect } from 'react-redux'
import { AccountDetail } from '../../components/pages/AccountPage/molecules/AccountPage'
import { duplicateCheck } from '../../store/SignUpPage/actions'
import { modifyAccount, changeAccountInput } from '../../store/AccountPage/actions'

const mapStateToProps = (state) => { 
    return {
	statefunction : state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onAccountLoad: (key) => {
          dispatch(getAccount(key))
      },
    	onDuplicateCheck: (key, value) => {
        	dispatch(duplicateCheck(key, value))
    	},
    	onSignUpSubmit: (email, pw, confirmpw, nickname) => {
        	dispatch(modifyAccount(email, pw, confirmpw, nickname))
    	},
      onChangeAccountInput: (key, value) => {
          dispatch(changeAccountInput(key, value))
      },
      handleChange: (key, value) => {
        dispatch(duplicateCheck(key, value))
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetail)
