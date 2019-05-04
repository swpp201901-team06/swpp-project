import { connect } from 'react-redux'
import { Main } from '../../components/pages/MainPage/Molecules/Main'
import { goToSignIn, goToGuest } from '../../store/Mainpage/actions'
import { baseHistory } from '../../index'

const mapStateToProps = (state) =>{
    return {
        statefunction : state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickSignin: () => {
            baseHistory.push('/signin')
            dispatch(goToSignIn())
        },
        onClickGuest: () => {
            baseHistory.push('/guest')
            dispatch(goToGuest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)