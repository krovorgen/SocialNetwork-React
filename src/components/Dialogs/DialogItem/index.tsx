import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { DialogsDataType } from '../../../redux/reducers/types';

import styles from '../style.module.scss';

const DialogItem: FC<DialogsDataType> = ({ id, name }) => (
  <li className={styles['dialogs__item']}>
    <NavLink
      className={styles['dialogs__link']}
      activeClassName={styles['dialogs__link--active']}
      to={`/dialogs/${id}`}
    >
      {name}
    </NavLink>
  </li>
);

export default DialogItem;
