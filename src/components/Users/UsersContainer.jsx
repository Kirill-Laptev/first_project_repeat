import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import UsersFunc from './UsersFunc';
import { connect } from 'react-redux';
import { setUsers, follow, unfollow, setCurrentPage, setTotalUsersCount, setLoadingPreloader} from '../../redux/usersReducer';

class UsersContainer extends React.Component {


    componentDidMount() {
        this.props.setLoadingPreloader(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response) => {
            this.props.setLoadingPreloader(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onPageChanged = (page) => {
        this.props.setLoadingPreloader(true);
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
        .then((response) => {
            this.props.setLoadingPreloader(false);
            this.props.setUsers(response.data.items);
        })
    }
  

    render(){
        return <UsersFunc
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

