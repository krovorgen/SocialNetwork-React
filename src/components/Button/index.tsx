import React, { FC } from 'react';
import classNames from 'classnames';

import { IButtonProps } from './types';

import styles from './style.module.scss';

const Button: FC<IButtonProps> = ({ addClass, children, size, onClick }) => {
  const appearancesList = {
    [styles['button__100']]: size === 'full',
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
