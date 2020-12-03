import React from 'react';
import styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../common/Preloader';
import ProfileStatus from './ProfileStatus';

const Profile = (props) => {

  if(props.userProfile === null || props.userProfile === undefined){
    return (
      <div className={styles.preloader}><Preloader /></div>
    )
  }

  return (
    <div className={styles.profile}>
      {/* <img
        src="https://img4.goodfon.ru/original/2560x1440/5/a5/react-framework-logo.jpg"
        alt="react-logo"
      /> */}
      <ProfileStatus status={props.status} 
                     updateUserStatus={props.updateUserStatus}/>
      <div><img className={styles.profileAvatar} src={props.userProfile.photos.large} /></div>
      <div>USER ID : {props.userProfile.userId}</div>
      <div>{props.userProfile.fullName}</div>
      
      <MyPostsContainer />
    </div>
  );
};

export default Profile;