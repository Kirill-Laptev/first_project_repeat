import React from 'react';
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <div className={styles.header}>
      <img
        src="https://pbs.twimg.com/media/DAqhrH5XUAEEzfp.png"
        alt="logo"
      />
    </div>
  );
};

export default Header;