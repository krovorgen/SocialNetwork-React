import React, { FC } from 'react';
import styles from './styles.module.scss';
import { Button } from '../../atoms/Button';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

export type SubmitType = {
  login: string;
  password: string;
  rememberStatus: boolean;
};

const LoginForm: FC<InjectedFormProps<SubmitType>> = ({ handleSubmit }) => {
  return (
    <form className={styles['form']} onSubmit={handleSubmit}>
      <label className={styles['form__element']}>
        <Field placeholder="login" component="input" name="login" />
      </label>
      <label className={styles['form__element']}>
        <Field placeholder="password" component="input" name="password" />
      </label>
      <label className={styles['form__element']}>
        <Field placeholder="password" component="input" type="checkbox" name="rememberStatus" /> remember me
      </label>
      <Button size="full" type="submit" addClass={styles['form__element']}>
        LOGIN
      </Button>
    </form>
  );
};

export const LoginReduxForm = reduxForm<SubmitType>({ form: 'loginForm' })(LoginForm);
