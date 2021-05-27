import React from 'react';

import styles from './style.module.scss';

const NavBar = () => {
    return (
        <nav className={`${styles['menu']} container--menu`}>
            <ul className="menu__list">
                <li className="menu__item">
                    <a className="menu__link" href="#">
                        Profile
                    </a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="#">
                        Messages
                    </a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="#">
                        News
                    </a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="#">
                        Music
                    </a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="#">
                        Settings
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
