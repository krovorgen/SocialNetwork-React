import React from 'react';

import styles from './style.module.scss';

const NavBar = () => {
    return (
        <nav className={`${styles['menu']}`}>
            <ul className="menu__list">
                <li className={styles['menu__item']}>
                    <a
                        className={`${styles['menu__link']} ${styles['menu__link--profile']}`}
                        href="#"
                    >
                        Profile
                    </a>
                </li>
                <li className={styles['menu__item']}>
                    <a
                        className={`${styles['menu__link']} ${styles['menu__link--messages']}`}
                        href="#"
                    >
                        Messages
                    </a>
                </li>
                <li className={styles['menu__item']}>
                    <a className={`${styles['menu__link']} ${styles['menu__link--news']}`} href="#">
                        News
                    </a>
                </li>
                <li className={styles['menu__item']}>
                    <a
                        className={`${styles['menu__link']} ${styles['menu__link--music']}`}
                        href="#"
                    >
                        Music
                    </a>
                </li>
                <li className={styles['menu__item']}>
                    <a
                        className={`${styles['menu__link']} ${styles['menu__link--settings']}`}
                        href="#"
                    >
                        Settings
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
