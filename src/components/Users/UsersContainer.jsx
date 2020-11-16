import React from 'react';
import { setUsersAC, followAC, unfollowAC } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import UsersC from './UsersC';



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
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
            dispatch(unfollowAC(userID))
        }
    }
}


let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);


export default UsersContainer;