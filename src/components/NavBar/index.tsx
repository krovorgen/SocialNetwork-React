import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { v1 } from 'uuid';

import { MenuNavigationMockDataType } from './types';

import styles from './style.module.scss';

const menuNavigationMockData: MenuNavigationMockDataType[] = [
  { id: v1(), iconClass: 'profile', url: '/profile', textLink: 'Profile' },
  { id: v1(), iconClass: 'messages', url: '/dialogs', textLink: 'Messages' },
  { id: v1(), iconClass: 'news', url: '/news', textLink: 'News' },
  { id: v1(), iconClass: 'music', url: '/music', textLink: 'Music' },
  { id: v1(), iconClass: 'settings', url: '/settings', textLink: 'Settings' },
  { id: v1(), iconClass: 'settings', url: '/users', textLink: 'Users' },
];

const NavBar: FC = () => (
  <nav className={`${styles['menu']}`}>
    <ul className="menu__list">
      {menuNavigationMockData.map((item) => {
        return (
          <li key={item.id} className={styles['menu__item']}>
            <NavLink
              className={`${styles['menu__link']} ${styles[`menu__link--${item.iconClass}`]}`}
              activeClassName={styles['menu__link--active']}
              exact
              to={`${item.url}`}
            >
              {item.textLink}
            </NavLink>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default NavBar;
