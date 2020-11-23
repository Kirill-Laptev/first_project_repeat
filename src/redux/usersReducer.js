const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
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

        case SET_CURRENT_PAGE : 
            return {
                ...state,
                currentPage: action.pageNumber,
            }

        case SET_TOTAL_USERS_COUNT : 
            return {
                ...state,
                totalUsersCount: action.totalCount,
            }

        default: 
        return state;    
    }
}


export const setUsers = (users) => {
    return {type: SET_USERS, users: users}
}

export const follow = (userID) => {
    return{type: FOLLOW, userID: userID}
}

export const unfollow = (userID) => {
    return {type: UNFOLLOW, userID: userID}
}

export const setCurrentPage = (pageNumber) => {
    return {type: SET_CURRENT_PAGE, pageNumber: pageNumber}
}

export const setTotalUsersCount = (totalCount) => {
    return {type: SET_TOTAL_USERS_COUNT, totalCount: totalCount}
}

export default usersReducer;