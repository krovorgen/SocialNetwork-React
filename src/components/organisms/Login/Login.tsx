import React from 'react';
import { LoginReduxForm, SubmitType } from '../../molecules/LoginForm';

export const Login = () => {
  const onSubmit = (formData: SubmitType) => {
    console.log(formData);
  };

  return (
    <>
      <a href="https://social-network.samuraijs.com/" rel="noreferrer" target="_blank">
        Samurai
      </a>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  );
};
