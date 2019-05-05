import { connect } from 'react-redux'
import { Main } from '../../components/pages/MainPage/Molecules/Main'
import { goToSignin, goToGuest } from '../../store/Mainpage/actions'
import { baseHistory } from '../../index'

const mapStateToProps = (state) =>{
    return {
        statefunction : state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickSignin: () => {
            console.log("si")
            baseHistory.push('/signin')
            dispatch(goToSignin())
        },
        onClickGuest: () => {
            console.log("gu")
            baseHistory.push('/guest')
            dispatch(goToGuest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)