import React, { FC } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Dialogs from './components/Dialogs';
import News from './components/News';
import Music from './components/Music';
import Settings from './components/Settings';
import { RooTStateType, updateNewPostText } from './redux/state';

interface IAppProps {
    state: RooTStateType;
    addPostCallback: () => void;
    updateNewPostText: (value: string) => void;
}

const App: FC<IAppProps> = ({ state, addPostCallback }) => {
    return (
        <div className="container">
            <Header />
            <main className="main">
                <NavBar />
                <div className="content">
                    <Route
                        path="/profile"
                        render={() => (
                            <Profile
                                profilePage={state.profilePage}
                                addPostCallback={addPostCallback}
                                updateNewPostText={updateNewPostText}
                            />
                        )}
                    />
                    <Route
                        path="/dialogs"
                        render={() => <Dialogs dialogsPage={state.dialogsPage} />}
                    />
                    <Route path="/news" render={() => <News />} />
                    <Route path="/music" render={() => <Music />} />
                    <Route path="/settings" render={() => <Settings />} />
                </div>
            </main>
        </div>
    );
};

export default App;
