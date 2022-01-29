import React, { FC } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import logo from '../../images/rocket.png';
import { userLogout } from '../../redux/thunk/auth-thunk';
import { Button } from '@alfalab/core-components/button';
import { Link } from '@alfalab/core-components/link';

import styles from './style.module.scss';

type IHeaderProps = {
  isAuth: boolean;
  login: string | null;
};

export const Header: FC<IHeaderProps> = ({ isAuth, login }) => {
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(userLogout());
    return <Redirect to="/login" />;
  };
  return (
    <>
      <header className={styles.header}>
        <img className={styles.logo} width={50} height={50} src={logo} alt="logo" />
        {isAuth ? (
          login
        ) : (
          <NavLink to={'/login'}>
            <Link view="primary" Component="span">
              Login
            </Link>
          </NavLink>
        )}
        {isAuth ? (
          <Button size="xxs" onClick={logoutUser} view="tertiary">
            Logout
          </Button>
        ) : null}
      </header>
    </>
  );
};
