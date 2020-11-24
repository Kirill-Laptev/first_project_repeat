const SET_AUTH_DATA = 'SET_AUTH_DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_AUTH_DATA :
            return{
                ...state,
                ...action.data,
                isAuth: true,
            }
           
        default:
            return state;   
    } 
}


export const setAuthData = (id, login, email) => {
    return {type: SET_AUTH_DATA, data: {id: id, login: login, email: email}}
}


export default authReducer;