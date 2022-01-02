import React, { FC } from 'react';
import styles from './styles.module.scss';
import { Button } from '../../../atoms/Button';
import { Field, Form } from 'react-final-form';
import { Input } from '../../../atoms/Input';
import { Checkbox } from '../../../atoms/Checkbox';
import { composeValidators, required } from '../../../../helpers/validators';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../../../redux/thunk/auth-thunk';

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
                <Input
                  placeholder="email"
                  error={props.meta && props.meta.touched && props.meta.error}
                  {...props.input}
                />
              )}
            </Field>
          </label>
          <label className={styles.element}>
            <Field type="password" name="password" validate={composeValidators(required)}>
              {(props) => (
                <Input
                  placeholder="password"
                  error={props.meta && props.meta.touched && props.meta.error}
                  {...props.input}
                />
              )}
            </Field>
          </label>
          <label className={styles.element}>
            <Field type="checkbox" name="rememberMe">
              {(props) => <Checkbox {...props.input}>remember me</Checkbox>}
            </Field>
          </label>
          <Button size="full" type="submit" addClass={styles.element}>
            LOGIN
          </Button>
        </form>
      )}
    </Form>
  );
};
