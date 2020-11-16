import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userAvatar from '../../temp/image/userAvatar.png';

class UsersC extends React.Component {


    getUsers = () => {
        if(this.props.users.length === 0){
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => {
                this.props.setUsers(response.data.items);
            })
       }
    }
   
   

    render(){
        return <div>
        <div><button onClick={this.getUsers}>Get Users</button></div>
        <div>{this.props.users.map((user) => {
            return <div className={styles.users}>
                <div>{user.photos.small ? user.photos.small : <img src={userAvatar} className={styles.avatar}/>}</div>
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

