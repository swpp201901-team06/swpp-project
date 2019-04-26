import { connect } from 'react-redux'
import { signUp } from '../../../components/pages/SignUpPage/molecules/signUp'

const mapStateToProps = (state) => {
  console.log("a");
   return {
  statefunction: state
   }
}

const mapDispatchToProps = (dispatch) => {
  console.log("b");
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(signUp)
