const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [],
}


const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USERS :
            return {
                ...state,
                users: action.users
            }
        
        case FOLLOW :
            return {
                ...state,
                users: state.users.map((user) => {
                    if(action.userID === user.id){
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user;
                }) 
            } 
            
        case UNFOLLOW : 
            return {
                ...state,
                users: state.users.map((user) => {
                    if(action.userID === user.id){
                        return{
                            ...user,
                            followed: false
                        }
                    }
                    return user;
                })
            }

        default: 
        return state;    
    }
}


export const setUsersAC = (users) => {
    return {type: SET_USERS, users: users}
}

export const followAC = (userID) => {
    return{type: FOLLOW, userID: userID}
}

export const unfollowAC = (userID) => {
    return {type: UNFOLLOW, userID: userID}
}

export default usersReducer;