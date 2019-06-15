import { connect } from 'react-redux'
import { AccountDetail } from '../../components/pages/AccountPage/molecules/AccountDetail'
import { duplicateCheck } from '../../store/SignUpPage/actions'
import { getAccount, modifyAccount, changeAccountInput } from '../../store/AccountPage/actions'

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
    	onAccountChange: (email, pw, confirmpw, nickname, publicStatus) => {
        	dispatch(modifyAccount(email, pw, confirmpw, nickname, publicStatus))
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
