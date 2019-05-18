export const goToSignin = () => {
    console.log('store/MainPage/actions goToSignin')
    return{
        type: 'GO_TO_SIGNIN',
    }
}

export const goToGuest = () => {
    console.log('store/MainPage/actions goToGuest')
    return{
        type: 'GO_TO_GUEST',
    }
}