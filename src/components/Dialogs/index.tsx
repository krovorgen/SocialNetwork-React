import React from 'react';

import styles from './style.module.scss';

const Dialogs = () => {
    return (
        <div className={styles['dialogs']}>
            <ul className={styles['dialogs__items']}>
                <li className={styles['dialogs__item']}>Roma</li>
                <li className={styles['dialogs__item']}>Maxime</li>
                <li className={styles['dialogs__item']}>Anya</li>
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
