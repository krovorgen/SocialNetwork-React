import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

import styles from './styles.module.scss';
import cn from 'classnames';

type DefaultInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

interface IInputProps {
  addClass?: string;
}

export const Input: FC<IInputProps & DefaultInputProps> = ({ addClass, ...props }) => {
  return <input className={cn(styles['input'], addClass)} {...props} />;
};
