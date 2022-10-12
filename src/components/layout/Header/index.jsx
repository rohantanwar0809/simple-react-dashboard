import React from 'react';
import styles from './Header.module.scss';
import { HiCubeTransparent, HiOutlineUserCircle } from 'react-icons/hi';

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <a href='#!' className={styles.logo}>
        <HiCubeTransparent size={'30px'} />
      </a>
      <div className={styles.header}>
        <div className={styles.userIcon}>
          <HiOutlineUserCircle size={'30px'} />
        </div>
      </div>
    </div>
  );
};

export default Header;
