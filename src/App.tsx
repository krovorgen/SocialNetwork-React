import React, { FC } from 'react';
import { Route } from 'react-router-dom';

import { ActionTypes, RooTStateType } from './redux/state';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Dialogs from './components/Dialogs';
import News from './components/News';
import Music from './components/Music';
import Settings from './components/Settings';
import TestPage from './components/TestPage';

interface IAppProps {
    state: RooTStateType;
    dispatch: (action: ActionTypes) => void;
}

const App: FC<IAppProps> = ({ state, dispatch }) => {
    return (
        <div className="container">
            <Header />
            <main className="main">
                <NavBar />
                <div className="content">
                    <Route
                        path="/profile"
                        render={() => (
                            <Profile profilePage={state.profilePage} dispatch={dispatch} />
                        )}
                    />
                    <Route
                        path="/dialogs"
                        render={() => <Dialogs dialogsPage={state.dialogsPage} />}
                    />
                    <Route path="/news" render={() => <News />} />
                    <Route path="/music" render={() => <Music />} />
                    <Route path="/settings" render={() => <Settings />} />
                    <Route path="/admin" render={() => <TestPage />} />
                </div>
            </main>
        </div>
    );
};

export default App;
