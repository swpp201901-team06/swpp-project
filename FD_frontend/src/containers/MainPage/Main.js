import { connect } from 'react-redux'
import { Main } from '../../components/pages/MainPage/Molecules/Main'
import { goToSignIn, goToGuest } from '../../store/Mainpage/actions'

const mapStateToProps = (state) =>{
    return {
        statefunction : state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickSignin: () => {
            dispatch(goToSignIn())
        },
        onClickGuest: () => {
            dispatch(goToGuest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)