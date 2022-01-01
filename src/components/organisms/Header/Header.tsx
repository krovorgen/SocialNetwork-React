import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../../images/rocket.png';
import { IHeaderProps } from './types';
import { api } from '../../../api';
import { Button } from '../../atoms/Button';

import styles from './style.module.scss';

export const Header: FC<IHeaderProps> = ({ isAuth, login }) => {
  const logoutUser = () => {
    api.logoutUser().then(() => window.location.reload());
  };
  return (
    <header className={`${styles['header']}`}>
      <img className={styles['header__logo']} width={50} height={50} src={logo} alt="logo" />
      {isAuth ? login : <NavLink to={'/login'}>Login</NavLink>}
      {isAuth ? <Button onClick={logoutUser}>Logout</Button> : null}
    </header>
  );
};
