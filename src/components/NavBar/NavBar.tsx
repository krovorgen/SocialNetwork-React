import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { v1 } from 'uuid';

import { MenuNavigationMockDataType } from './types';

import styles from './style.module.scss';
import cn from 'classnames';

const menuNavigationMockData: MenuNavigationMockDataType[] = [
  { id: v1(), url: '/profile', textLink: 'Profile' },
  { id: v1(), url: '/dialogs', textLink: 'Messages' },
  { id: v1(), url: '/news', textLink: 'News' },
  { id: v1(), url: '/music', textLink: 'Music' },
  { id: v1(), url: '/settings', textLink: 'Settings' },
  { id: v1(), url: '/users', textLink: 'Users' },
];

export const NavBar: FC = () => (
  <nav className={styles.menu}>
    <ul className={styles.list}>
      {menuNavigationMockData.map((item) => {
        return (
          <li key={item.id} className={styles.item}>
            <NavLink className={cn(styles.link)} activeClassName={styles.active} exact to={`${item.url}`}>
              {item.textLink}
            </NavLink>
          </li>
        );
      })}
    </ul>
  </nav>
);
