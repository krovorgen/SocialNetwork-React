import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

type DefaultInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

interface IInputProps {
  addClass?: string;
  error?: string;
}

export const Input: FC<IInputProps & DefaultInputProps> = ({ addClass, error, ...props }) => {
  return (
    <>
      <input className={cn(styles['input'], addClass, { [styles.error]: error })} {...props} />
      {error ? <p className={styles.error}>{error}</p> : null}
    </>
  );
};
