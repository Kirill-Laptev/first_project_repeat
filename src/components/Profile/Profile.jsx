import React from 'react';
import styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <img
        src="https://img4.goodfon.ru/original/2560x1440/5/a5/react-framework-logo.jpg"
        alt="react-logo"
      />
      <div>description</div>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;