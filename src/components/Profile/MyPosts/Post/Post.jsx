import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.post}>
            <img src='https://im0-tub-ru.yandex.net/i?id=d84f452cb35928f4eced6eb5444bdde5&n=13' alt='user-avatar' />
            <span>{props.text}</span>
            <div>like {props.likesCount}</div>
        </div>
    ) 
}

export default Post;