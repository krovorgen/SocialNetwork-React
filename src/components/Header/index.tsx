import React, { FC } from 'react';

import styles from './style.module.scss';

const Header: FC = () => (
  <header className={`${styles['header']}`}>
    <img
      className={styles['header__logo']}
      width={50}
      height={50}
      src="./images/rocket.png"
      alt="logo"
    />
  </header>
);

export default Header;
