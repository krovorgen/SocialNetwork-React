import React, { FC } from 'react';
import classNames from 'classnames';

import { DefaultButtonPropsType, IButtonProps } from './types';

import styles from './style.module.scss';

const Button: FC<IButtonProps & DefaultButtonPropsType> = ({
  addClass,
  active,
  variant,
  children,
  size,
  onClick,
  ...props
}) => {
  const appearancesList = {
    [styles['button__100']]: size === 'full',
    [styles['button--active']]: active,
    [styles['button--navigation']]: variant === 'navigation',
  };
  return (
    <button
      className={classNames(styles['button'], addClass, appearancesList)}
      onClick={onClick}
      type={'button'}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
