const UPDATE_PROFILE_NEWPOSTTEXT = 'UPDATE_PROFILE_NEWPOSTTEXT ';
const PROFILE_ADD_POST = 'PROFILE_ADD_POST';
const SET_PROFILE_USER = 'SET_PROFILE_USER';

let initialState = {
    postsData: [
        {text: 'hello', likesCount: 40},
        {text: 'how are you ?', likesCount: 35},
        {text: 'yoyoyo', likesCount: 20},
    ],
    newPostText: '',
    userProfile: null,
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

export default profileReducer;