import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './style.module.scss';

const Dialogs = () => {
    return (
        <div className={styles['dialogs']}>
            <ul className={styles['dialogs__items']}>
                <li className={styles['dialogs__item']}>
                    <NavLink
                        className={styles['dialogs__link']}
                        activeClassName={styles['dialogs__link--active']}
                        to="/dialogs/1"
                    >
                        Roma
                    </NavLink>
                </li>
                <li className={styles['dialogs__item']}>
                    <NavLink
                        className={styles['dialogs__link']}
                        activeClassName={styles['dialogs__link--active']}
                        to="/dialogs/2"
                    >
                        Maxime
                    </NavLink>
                </li>
                <li className={styles['dialogs__item']}>
                    <NavLink
                        className={styles['dialogs__link']}
                        activeClassName={styles['dialogs__link--active']}
                        to="/dialogs/3"
                    >
                        Anya
                    </NavLink>
                </li>
            </ul>
            <ul className={styles['messages']}>
                <li className={styles['messages__item']}>Hallo Welt</li>
                <li className={styles['messages__item']}>Hallo Welt</li>
                <li className={styles['messages__item']}>Hallo Welt</li>
            </ul>
        </div>
    );
};

export default Dialogs;
