import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


const Navbar = (props) => {
  return (
    <nav className={styles.nav}>
      <div><NavLink to="/profile">Profile</NavLink></div>
      <div><NavLink to="/messages">Messages</NavLink></div>
      <div><NavLink to="/news">News</NavLink></div>
      <div><NavLink to="/music">Music</NavLink></div>
      <div><NavLink to="/settings">Settings</NavLink></div>
      <div><NavLink to="/users">Users</NavLink></div>
    </nav>
  );
};

export default Navbar;