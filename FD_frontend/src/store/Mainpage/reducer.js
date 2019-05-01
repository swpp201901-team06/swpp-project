import { initialState } from './selectors'
import { Redirect } from 'react-router'

const MainPage = (state = initialState, action) => {
    switch(action.type){
        case 'GO_TO_SIGNIN':
            <Redirect to = "/signin"></Redirect>
        case 'GO_TO_GUEST':
            <Redirect to = "/guest"></Redirect>
        default:
            return state
    }
}

export default MainPage