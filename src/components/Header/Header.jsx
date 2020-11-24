import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className={styles.header}>
     <div><img
        src="https://pbs.twimg.com/media/DAqhrH5XUAEEzfp.png"
        alt="logo"
      /></div>
      <div>{props.isAuth ? props.userLogin : <NavLink to='/login'>Login</NavLink>}</div>
    </div>
  );
};

export default Header;