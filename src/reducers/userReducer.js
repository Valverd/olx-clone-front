export default (state= {email: ''}, action) => {
    if(action.type === 'SET_EMAIL') { 
        return {...state, email: action.payload.email} //copio o estado porém modifico o email
    }

    return state
};