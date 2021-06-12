import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Dialogs from './components/Dialogs';
import News from './components/News';
import Music from './components/Music';
import Settings from './components/Settings';

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <main className="main">
                    <NavBar />
                    <div className="content">
                        <Route path="/profile" component={Profile} />
                        <Route path="/dialogs" component={Dialogs} />
                        <Route path="/news" component={News} />
                        <Route path="/music" component={Music} />
                        <Route path="/settings" component={Settings} />
                    </div>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;
