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
  TestPage,
} from './components';
import { IAppProps } from './types';

const App: FC<IAppProps> = ({ state, dispatch }) => {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <NavBar />
        <div className="content">
          <Route
            path="/profile"
            render={() => <Profile profilePage={state.profilePage} dispatch={dispatch} />}
          />
          <Route
            path="/dialogs"
            render={() => <DialogsContainer dialogsPage={state.dialogsPage} dispatch={dispatch} />}
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
