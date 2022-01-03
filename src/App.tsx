import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { IAppProps } from './types';
import { Settings } from './components/organisms/Settings';
import { NavBar } from './components/organisms/NavBar';
import { News } from './components/organisms/News';
import { Music } from './components/organisms/Music';
import { DialogsContainer } from './components/organisms/Dialogs/DialogsContainer';
import { UsersContainer } from './components/organisms/Users/UsersContainer';
import { ProfileContainer } from './components/organisms/Profile/ProfileContainer';
import { HeaderContainer } from './components/organisms/Header/HeaderContainer';
import { Login } from './components/organisms/Login';

const App: FC<IAppProps> = () => {
  return (
    <>
      <div className="container">
        <HeaderContainer />
        <main className="main">
          <NavBar />
          <div className="content">
            <Route path="/profile/:userID?">
              <ProfileContainer />
            </Route>
            <Route path="/dialogs">
              <DialogsContainer />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/music">
              <Music />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/users" exact>
              <UsersContainer />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
          </div>
        </main>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="dark"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
