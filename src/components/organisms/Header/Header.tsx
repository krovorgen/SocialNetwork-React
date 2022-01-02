import React, { FC, useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import logo from '../../../images/rocket.png';
import { IHeaderProps } from './types';
import { Button } from '../../atoms/Button';
import { userLogout } from '../../../redux/thunk/auth-thunk';

import styles from './style.module.scss';

export const Header: FC<IHeaderProps> = ({ isAuth, login }) => {
  const [redirectStatus, setRedirectStatus] = useState(false);
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(userLogout());
    setRedirectStatus(true);
  };
  return (
    <>
      {redirectStatus ? <Redirect to="/login" /> : null}
      <header className={`${styles['header']}`}>
        <img className={styles['header__logo']} width={50} height={50} src={logo} alt="logo" />
        {isAuth ? login : <NavLink to={'/login'}>Login</NavLink>}
        {isAuth ? <Button onClick={logoutUser}>Logout</Button> : null}
      </header>
    </>
  );
};
