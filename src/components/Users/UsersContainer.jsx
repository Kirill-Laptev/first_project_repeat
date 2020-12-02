import React from 'react';
import styles from './Users.module.css';
import Users from './Users';
import { connect } from 'react-redux';
import { setUsers, setCurrentPage, setTotalUsersCount, 
         setPreloader, loadingOnClick, getUsersTC, 
         getUsersOnChangeTC, unfollowTC, followTC} from '../../redux/usersReducer';

         

class UsersContainer extends React.Component {


    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page) => {
        this.props.getUsersOnChange(page, this.props.pageSize)
    }
  

    render(){
        return <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize} 
        onPageChanged={this.onPageChanged}
        currentPage={this.props.currentPage}
        users={this.props.users}
        isLoading={this.props.isLoading}
        loadingOnClick={this.props.loadingOnClick} 
        buttonID={this.props.buttonID}
        unfollow={this.props.unfollow}
        follow={this.props.follow} /> 
    }
}   


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isLoadingPreloader: state.usersPage.isLoadingPreloader,
        loadingOnClick: state.usersPage.loadingOnClick,
        buttonID: state.usersPage.buttonID,
    }
}



export default connect(mapStateToProps, {
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setPreloader,
    loadingOnClick,
    getUsers: getUsersTC,
    getUsersOnChange: getUsersOnChangeTC,
    unfollow: unfollowTC,
    follow: followTC,
})(UsersContainer);

