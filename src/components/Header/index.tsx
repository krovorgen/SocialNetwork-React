import React from 'react';

import styles from './style.module.scss';

const Header = () => {
    return (
        <header className={`${styles['header']} container--header`}>
            <img
                className={styles['header__logo']}
                width={50}
                height={50}
                src="./images/rocket.png"
                alt="logo"
            />
        </header>
    );
};

export default Header;
