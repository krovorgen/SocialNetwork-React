import React, { FC } from 'react';
import cn from 'classnames';

import { DefaultButtonPropsType, IButtonProps } from './types';

import styles from './style.module.scss';

export const Button: FC<IButtonProps & DefaultButtonPropsType> = ({
  addClass,
  active,
  variant,
  children,
  size,
  ...props
}) => {
  const appearancesList = {
    [styles['button__100']]: size === 'full',
    [styles['button--active']]: active,
    [styles['button--navigation']]: variant === 'navigation',
  };
  return (
    <button className={cn(styles['button'], addClass, appearancesList)} type={'button'} {...props}>
      {children}
    </button>
  );
};
