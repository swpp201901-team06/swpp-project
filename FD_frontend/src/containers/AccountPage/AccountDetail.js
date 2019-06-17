import { connect } from 'react-redux'
import { AccountDetail } from '../../components/pages/AccountPage/molecules/AccountDetail'
import { duplicateCheck } from '../../store/SignUpPage/actions'
import { getAccount, modifyAccountInfo, modifyPassword, changeAccountInput } from '../../store/AccountPage/actions'

const mapStateToProps = (state) => { 
    return {
	statefunction : state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onAccountLoad: () => {
          dispatch(getAccount())
      },
    	onDuplicateCheck: (key, value) => {
        	dispatch(duplicateCheck(key, value))
    	},
    	onAccountInfoChange: (nickname, publicStatus) => {
        	dispatch(modifyAccountInfo(nickname, publicStatus))
    	},
    	onPasswordChange: (pw, confirmpw) => {
        	dispatch(modifyPassword(pw, confirmpw))
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
