import { initialState } from './selectors'
import { Redirect } from 'react-router'

const MainPage_reducer = (state = initialState, action) => {
    switch(action.type){
        // case 'GO_TO_SIGNIN':
        //     //<Redirect to = "/signin"></Redirect>
        //     return{
        //         ...state,
        //     }
        // case 'GO_TO_GUEST':
        //     //<Redirect to = "/guest"></Redirect>
        //     return{
        //         ...state,
        //     }
        default:
            return state
    }
}

export default MainPage_reducer