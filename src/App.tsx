import React, { FC } from 'react';
import { Route } from 'react-router-dom';

import {
  DialogsContainer,
  Header,
  Music,
  NavBar,
  News,
  Profile,
  Settings,
  UsersContainer,
} from './components';
import { IAppProps } from './types';

const App: FC<IAppProps> = () => {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <NavBar />
        <div className="content">
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/" exact render={() => <UsersContainer />} />
        </div>
      </main>
    </div>
  );
};

export default App;
