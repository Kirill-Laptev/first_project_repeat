import { ProfileAPI } from "../api/api";

const UPDATE_PROFILE_NEWPOSTTEXT = 'UPDATE_PROFILE_NEWPOSTTEXT ';
const PROFILE_ADD_POST = 'PROFILE_ADD_POST';
const SET_PROFILE_USER = 'SET_PROFILE_USER';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postsData: [
        {text: 'hello', likesCount: 40},
        {text: 'how are you ?', likesCount: 35},
        {text: 'yoyoyo', likesCount: 20},
    ],
    newPostText: '',
    userProfile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_PROFILE_NEWPOSTTEXT :
            return {
                ...state,
                newPostText: action.newText
            }
        
        case PROFILE_ADD_POST : 
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, {text: state.newPostText, likesCount: 0}],
            }

        case SET_PROFILE_USER :
            return {
                ...state,
                userProfile: action.userProfile
            }

        case SET_STATUS :
            return {
                ...state,
                status: action.status
            }
            
            default: 
            return state;
    }
}




export const updateTextAC = (text) =>{
    return {type: UPDATE_PROFILE_NEWPOSTTEXT, newText: text};
}

export const addPostAC = () => {
    return {type: PROFILE_ADD_POST};
}

export const setProfileUser = (userProfile) => {
    return {type: SET_PROFILE_USER, userProfile: userProfile}
}

const setStatus = (status) => {
    return {type: SET_STATUS, status}
}




// ===================================== Thunk'и

export const getUserProfileTC = (userID) => {
    return (dispatch) => {
        ProfileAPI.getProfile(userID)
        .then((response) => {
            dispatch(setProfileUser(response.data));
        })
    }
}

export const getUserStatusTC = (userID) => {
    return (dispatch) => {
        ProfileAPI.getStatus(userID)
        .then((response) => {
            dispatch(setStatus(response.data))
        })
    }
}


export const updateUserStatusTC = (status) => {
    return (dispatch) => {
        ProfileAPI.setUserStatus(status)
        .then((response) => {
            if(response.data.resultCode === 0){
                dispatch(setStatus(status))
            }
        })
    }
}


export default profileReducer;