import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userAvatar from '../../temp/image/userAvatar.png';

class UsersC extends React.Component {


    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response) => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
        .then((response) => {
            this.props.setUsers(response.data.items);
        })
    }
  

    render(){

        let pages = Math.ceil(this.props.totalUsersCount/this.props.pageSize);

        let pagesArray = [];

        for(let i = 1; i <= 20; i++){
            pagesArray.push(i);
        }


        return <div>
        <div>{pagesArray.map((page) => {
            return <span onClick={() => this.onPageChanged(page)} 
            className={this.props.currentPage === page ? styles.current : ''}>{page + ' '}</span>
        })}</div>
        <div>{this.props.users.map((user) => {
            return <div className={styles.users}>
                <div><img className={styles.avatar} src={user.photos.small ? user.photos.small : userAvatar}/></div>
                <div>{user.name}</div>
                <div>user.country</div>
                <div>user.city</div>
                <div>{user.followed ? <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>:
                <button onClick={() => this.props.follow(user.id)}>Follow</button>}</div>
            </div>
        })}</div>
        </div>  
    }
}   


export default UsersC;

