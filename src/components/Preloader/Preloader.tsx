import React, { FC } from 'react';

import styles from './style.module.scss';

export const Preloader: FC = () => {
  return (
    <div className={styles['preloader']}>
      <img src={'./images/loader.svg'} alt={'loader'} />
    </div>
  );
};
