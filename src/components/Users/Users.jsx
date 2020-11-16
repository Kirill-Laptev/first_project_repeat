import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userAvatar from '../../temp/image/userAvatar.png';

const Users = (props) => {

    if(props.users.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response) => {
            props.setUsers(response.data.items);
        })
   }
   

    return (
        <div>
        <div>{props.users.map((user) => {
            return <div className={styles.users}>
                <div>{user.photos.small ? user.photos.small : <img src={userAvatar} className={styles.avatar}/>}</div>
                <div>{user.name}</div>
                <div>user.country</div>
                <div>user.city</div>
                <div>{user.followed ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>:
                <button onClick={() => props.follow(user.id)}>Follow</button>}</div>
            </div>
        })}</div>
        </div>      
    )
}


export default Users;

