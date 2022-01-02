import React from 'react';
import { LoginForm } from './LoginForm';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../../redux/store.type';
import { Redirect } from 'react-router-dom';

export const Login = () => {
  const isAuth = useSelector((state: RootStateType) => state.auth.isAuth);

  if (isAuth) return <Redirect to="/profile" />;
  return (
    <>
      <a href="https://social-network.samuraijs.com/" rel="noreferrer" target="_blank">
        Samurai
      </a>
      <LoginForm />
    </>
  );
};
