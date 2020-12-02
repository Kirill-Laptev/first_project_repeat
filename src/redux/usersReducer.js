import {UsersAPI} from "../api/api";

const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_PRELOADER = 'SET_PRELOADER';
const LOADING_ON_CLICK = 'LOADING_ON_CLICK';

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
    isLoadingPreloader: false,
    loadingOnClick: false,
    buttonID: null,
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

        case SET_PRELOADER :
            return {
                ...state,
                isLoadingPreloader: action.isLoading,
            }   
            
        case LOADING_ON_CLICK :
            return {
                ...state,
                loadingOnClick: action.loadingOnClick,
                buttonID: action.buttonID
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

export const setPreloader = (isLoading) => {
    return {type: SET_PRELOADER, isLoading: isLoading}
}

export const loadingOnClick = (loadingOnClick, buttonID) => {
    return {type: LOADING_ON_CLICK, loadingOnClick: loadingOnClick, buttonID: buttonID}
}



//===================================== Thunk'и


export const getUsersTC = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setPreloader(true));
        UsersAPI.getUsers(currentPage, pageSize)
        .then((response) => {
            dispatch(setPreloader(false));
            dispatch(setUsers(response.data.items));
            dispatch(setTotalUsersCount(response.data.totalCount));
        })
    }
}

export const getUsersOnChangeTC = (page, pageSize) => {
    return (dispatch) => {
        dispatch(setPreloader(true));
        dispatch(setCurrentPage(page));
        UsersAPI.getUsers(page, pageSize)
        .then((response) => {
            dispatch(setPreloader(false));
            dispatch(setUsers(response.data.items));
        })
    }
}



export const unfollowTC = (userID) => {
    return (dispatch) => {
        dispatch(loadingOnClick(true, userID));
        UsersAPI.unfollowRequest(userID)
        .then((response) => {
            if(response.data.resultCode === 0){
                dispatch(unfollow(userID))
            }
            dispatch(loadingOnClick(false, null));
        })
    }
}


export const followTC = (userID) => {
    return (dispatch) => {
        dispatch(loadingOnClick(true, userID));
        UsersAPI.followRequest(userID)
        .then((response) => {
            if(response.data.resultCode === 0){
                dispatch(follow(userID))
            }
            dispatch(loadingOnClick(false, null));
        }) 
    }
}




export default usersReducer;