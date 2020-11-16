const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        {id: '1', name: 'Kirill', photo: 'https://www.verwin.com/assets/images/user-avatar.png', followed: false, city: 'Moscow'},
        {id: '2', name: 'Tanya', photo: 'https://www.verwin.com/assets/images/user-avatar.png', followed: false, city: 'Saint-P'},
        {id: '3', name: 'Vitya', photo: 'https://www.verwin.com/assets/images/user-avatar.png', followed: false, city: 'Tver'},
        {id: '4', name: 'Kolya', photo: 'https://www.verwin.com/assets/images/user-avatar.png', followed: false, city: 'Rjev'},
        {id: '5', name: 'Olya', photo: 'https://www.verwin.com/assets/images/user-avatar.png', followed: false, city: 'Vladivostok'},
        {id: '6', name: 'Polina', photo: 'https://www.verwin.com/assets/images/user-avatar.png', followed: false, city: 'Kazan'},
    ]
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


export const setUsersAC = (userID) => {
    return {type: SET_USERS, userID: userID}
}

export const followAC = (userID) => {
    return{type: FOLLOW, userID: userID}
}

export const unfollowAC = (userID) => {
    return {type: UNFOLLOW, userID: userID}
}

export default usersReducer;