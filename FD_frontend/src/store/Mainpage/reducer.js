import { initialState } from './selectors'
import { Redirect } from 'react-router'

const MainPage_reducer = (state = initialState, action) => {
    switch(action.type){
        case 'GO_TO_SIGNIN':
            //<Redirect to = "/signin"></Redirect>
            console.log("si_re")
            return{
                ...state,
            }
        case 'GO_TO_GUEST':
            //<Redirect to = "/guest"></Redirect>
            console.log("gu_re")
            return{
                ...state,
            }
        default:
            return state
    }
}

export default MainPage_reducer