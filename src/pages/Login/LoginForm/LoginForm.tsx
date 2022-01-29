import React, { FC } from 'react';
import { Field, Form } from 'react-final-form';
import { useDispatch } from 'react-redux';

import { composeValidators, required } from '../../../helpers/validators';
import { userLogin } from '../../../redux/thunk/auth-thunk';
import { Input } from '@alfalab/core-components/input';
import { Checkbox } from '@alfalab/core-components/checkbox';
import { Button } from '@alfalab/core-components/button';

import styles from './styles.module.scss';

export type SubmitType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const onSubmit = (formData: SubmitType) => {
    let { email, password, rememberMe } = formData;
    dispatch(userLogin(email, password, rememberMe));
  };
  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.element}>
            <Field name="email" validate={composeValidators(required)}>
              {(props) => (
                <>
                  <Input
                    {...props.input}
                    type="text"
                    label="email"
                    block
                    error={props.meta && props.meta.touched && props.meta.error}
                  />
                </>
              )}
            </Field>
          </label>
          <label className={styles.element}>
            <Field name="password" validate={composeValidators(required)}>
              {(props) => (
                <Input
                  {...props.input}
                  type="password"
                  label="password"
                  name="password"
                  block
                  error={props.meta && props.meta.touched && props.meta.error}
                />
              )}
            </Field>
          </label>
          <label className={styles.element}>
            <Field type="checkbox" name="rememberMe">
              {(props) => <Checkbox label="Remember me" {...props.input} />}
            </Field>
          </label>
          <Button size="xs" type="submit" block view="secondary" className={styles.element}>
            LOGIN
          </Button>
        </form>
      )}
    </Form>
  );
};
