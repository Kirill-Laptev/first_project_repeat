import React from 'react';
import styles from './Users.module.css';
import Users from './Users';
import { connect } from 'react-redux';
import { setUsers, follow, unfollow, setCurrentPage, setTotalUsersCount, setLoadingPreloader} from '../../redux/usersReducer';
import UsersAPI from '../../api/api';

class UsersContainer extends React.Component {


    componentDidMount() {
        this.props.setLoadingPreloader(true);
        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        .then((response) => {
            this.props.setLoadingPreloader(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onPageChanged = (page) => {
        this.props.setLoadingPreloader(true);
        this.props.setCurrentPage(page);
        UsersAPI.getUsers(page, this.props.pageSize)
        .then((response) => {
            this.props.setLoadingPreloader(false);
            this.props.setUsers(response.data.items);
        })
    }
  

    render(){
        return <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize} 
        onPageChanged={this.onPageChanged}
        currentPage={this.props.currentPage}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow} 
        isLoading={this.props.isLoading} /> 
    }
}   


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
    }
}



export default connect(mapStateToProps, {
    setUsers,
    follow,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    setLoadingPreloader,
})(UsersContainer);

