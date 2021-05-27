import React from 'react';

const App = () => {
    return (
        <div className="container">
            <header className="header container--header">
                <img
                    className="header__logo"
                    width={50}
                    height={50}
                    src="./images/rocket.png"
                    alt="logo"
                />
            </header>
            <nav className="menu container--menu">
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
            <main className="name container--main"></main>
        </div>
    );
};

export default App;
