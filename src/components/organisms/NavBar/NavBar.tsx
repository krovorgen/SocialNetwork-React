import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { v1 } from 'uuid';

import { MenuNavigationMockDataType } from './types';

import styles from './style.module.scss';
import cn from 'classnames';

const menuNavigationMockData: MenuNavigationMockDataType[] = [
  { id: v1(), iconClass: 'profile', url: '/profile', textLink: 'Profile' },
  { id: v1(), iconClass: 'messages', url: '/dialogs', textLink: 'Messages' },
  { id: v1(), iconClass: 'news', url: '/news', textLink: 'News' },
  { id: v1(), iconClass: 'music', url: '/music', textLink: 'Music' },
  { id: v1(), iconClass: 'settings', url: '/settings', textLink: 'Settings' },
  { id: v1(), iconClass: 'settings', url: '/users', textLink: 'Users' },
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
