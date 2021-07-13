import React, { FC } from 'react';

import logo from '../../images/rocket.png';

import styles from './style.module.scss';

const Header: FC = () => (
  <header className={`${styles['header']}`}>
    <img className={styles['header__logo']} width={50} height={50} src={logo} alt="logo" />
  </header>
);

export default Header;
