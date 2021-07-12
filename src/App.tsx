import React, { FC } from 'react';
import { Route } from 'react-router-dom';

import { ActionTypes, RootStateType } from './redux/store.type';
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

interface IAppProps {
  state: RootStateType;
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
