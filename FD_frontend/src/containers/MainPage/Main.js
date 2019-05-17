import { connect } from 'react-redux'
import { Main } from '../../components/pages/MainPage/Molecules/Main/index'
import { goToSignin, goToGuest } from '../../store/MainPage/actions'

const mapStateToProps = (state) =>{
    return {
        statefunction : state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickSignin: () => {
            //baseHistory.push('/signin')
            dispatch(goToSignin())
        },
        onClickGuest: () => {
            //baseHistory.push('/guest')
            dispatch(goToGuest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
