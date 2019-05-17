import { initialState } from './selectors'

const MainPage_reducer = (state = initialState, action) => {
    switch(action.type){
        case 'GO_TO_SIGNIN':
            return{
                ...state,
            }
        case 'GO_TO_GUEST':
            return{
                ...state,
            }
        default:
            return state
    }
}

export default MainPage_reducer
