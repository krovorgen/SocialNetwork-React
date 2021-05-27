import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Profile from './components/Profile';

const App = () => {
    return (
        <div className="container">
            <Header />
            <main className="main">
                <NavBar />
                <Profile />
            </main>
        </div>
    );
};

export default App;
