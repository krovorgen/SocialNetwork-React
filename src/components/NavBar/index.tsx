import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './style.module.scss';

const NavBar = () => {
    return (
        <nav className={`${styles['menu']}`}>
            <ul className="menu__list">
                <li className={styles['menu__item']}>
                    <NavLink
                        className={`${styles['menu__link']} ${styles['menu__link--profile']}`}
                        activeClassName={styles['menu__link--active']}
                        to="/profile"
                    >
                        Profile
                    </NavLink>
                </li>
                <li className={styles['menu__item']}>
                    <NavLink
                        className={`${styles['menu__link']} ${styles['menu__link--messages']}`}
                        activeClassName={styles['menu__link--active']}
                        to="/dialogs"
                    >
                        Messages
                    </NavLink>
                </li>
                <li className={styles['menu__item']}>
                    <NavLink
                        className={`${styles['menu__link']} ${styles['menu__link--news']}`}
                        activeClassName={styles['menu__link--active']}
                        to="/news"
                    >
                        News
                    </NavLink>
                </li>
                <li className={styles['menu__item']}>
                    <NavLink
                        className={`${styles['menu__link']} ${styles['menu__link--music']}`}
                        activeClassName={styles['menu__link--active']}
                        to="/music"
                    >
                        Music
                    </NavLink>
                </li>
                <li className={styles['menu__item']}>
                    <NavLink
                        className={`${styles['menu__link']} ${styles['menu__link--settings']}`}
                        activeClassName={styles['menu__link--active']}
                        to="/settings"
                    >
                        Settings
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
