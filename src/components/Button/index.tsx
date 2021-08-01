import React, { FC } from 'react';
import classNames from 'classnames';

import { IButtonProps } from './types';

import styles from './style.module.scss';

const Button: FC<IButtonProps> = ({ addClass, active, type, children, size, onClick }) => {
  const appearancesList = {
    [styles['button__100']]: size === 'full',
    [styles['button--active']]: active,
    [styles['button--navigation']]: type === 'navigation',
  };
  return (
    <button
      className={classNames(styles['button'], addClass, appearancesList)}
      onClick={onClick}
      type={'button'}
    >
      {children}
    </button>
  );
};

export default Button;
