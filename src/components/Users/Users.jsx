import React from 'react';
import styles from './Users.module.css';
import userAvatar from '../../temp/image/userAvatar.png';
import Preloader from '../common/Preloader';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import UsersAPI from '../../api/api';

const Users = (props) => {


    let pages = Math.ceil(props.totalUsersCount/props.pageSize);

    let pagesArray = [];

    for(let i = 1; i <= 20; i++){
        pagesArray.push(i);
    }


    return (
        <div>    
         <div className={styles.preloader}>{props.isLoading ? <Preloader /> : ''}</div> 

        <div>{pagesArray.map((page) => {   // Отрисовка страниц
            return <span onClick={() => props.onPageChanged(page)} 
            className={props.currentPage === page ? styles.current : ''}>{page + ' '}</span>
        })}</div>

        <div>{props.users.map((user) => {  // Отрисовка пришедших пользователей из сервера в state
            return <div className={styles.users}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                    <img className={styles.avatar} src={user.photos.small ? user.photos.small : userAvatar}/>
                    </NavLink>
                    </div>
                <div>{user.name}</div>
                <div>user.country</div>
                <div>user.city</div>
                <div>{user.followed ? <button onClick={() => {
                    UsersAPI.unfollowRequest(user.id)
                    .then((response) => {
                        if(response.data.resultCode === 0){
                            props.unfollow(user.id)
                        }
                    })
                }}>Unfollow</button>:
                <button onClick={() => {
                    UsersAPI.followRequest(user.id)
                    .then((response) => {
                        if(response.data.resultCode === 0){
                            props.follow(user.id)
                        }
                    }) 
                }}>Follow</button>}</div>
            </div>
        })}</div>
        </div> 
    )
}

export default Users;