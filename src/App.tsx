import React, { FC } from 'react';
import { Route } from 'react-router-dom';

import {
  DialogsContainer,
  Header,
  Music,
  NavBar,
  News,
  Settings,
  UsersContainer,
} from './components';
import { IAppProps } from './types';
import ProfileContainer from './components/Profile/ProfileContainer';

const App: FC<IAppProps> = () => {
  return (
    <div className="container">
      <Header />
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
