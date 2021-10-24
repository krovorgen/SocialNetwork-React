import React, { FC } from 'react';
import { Route } from 'react-router-dom';

import { DialogsContainer, HeaderContainer, Music, UsersContainer } from './components';
import { IAppProps } from './types';
import { Settings } from './components/Settings';
import { NavBar } from './components/NavBar';
import { News } from './components/News';
import ProfileContainer from './components/Profile/ProfileContainer';

const App: FC<IAppProps> = () => {
  return (
    <div className="container">
      <HeaderContainer />
      <main className="main">
        <NavBar />
        <div className="content">
          <Route path="/profile/:userID?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/users" exact render={() => <UsersContainer />} />
        </div>
      </main>
    </div>
  );
};

export default App;
