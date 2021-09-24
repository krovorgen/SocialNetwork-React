import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../images/rocket.png';
import { IHeaderProps } from './types';

import styles from './style.module.scss';

const Header: FC<IHeaderProps> = ({ isAuth, login }) => (
  <header className={`${styles['header']}`}>
    <img className={styles['header__logo']} width={50} height={50} src={logo} alt="logo" />
    {isAuth ? login : <NavLink to={'/login'}>Login</NavLink>}
  </header>
);

export default Header;
