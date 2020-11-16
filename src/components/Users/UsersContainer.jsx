import React from 'react';
import Users from './Users';
import { setUsersAC, followAC, unfollowAC } from '../../redux/usersReducer';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: () => {
            dispatch(setUsersAC());
        },
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        }
    }
}


let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;