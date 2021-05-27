import React from 'react';

import styles from './style.module.scss';

const Header = () => {
    return (
        <header className="header container--header">
            <img
                className="header__logo"
                width={50}
                height={50}
                src="./images/rocket.png"
                alt="logo"
            />
        </header>
    );
};

export default Header;
