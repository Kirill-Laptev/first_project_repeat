import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {
    return (
        <div>
        <div>{props.users.map((user) => {
            return <div className={styles.users}>
                <div><img src={user.photo} className={styles.avatar}/></div>
                <div>{user.name}</div>
                <div>{user.city}</div>
                <div>{user.followed ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>:
                <button onClick={() => props.follow(user.id)}>Follow</button>}</div>
            </div>
        })}</div>
        </div>      
    )
}


export default Users;

