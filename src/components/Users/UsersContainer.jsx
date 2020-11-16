import React from 'react';
import { setUsersAC, followAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import UsersC from './UsersC';



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        }
    }
}


let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);


export default UsersContainer;