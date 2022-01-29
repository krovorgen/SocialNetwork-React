import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { IAppProps } from './types';
import { Settings } from './pages/Settings';
import { NavBar } from './components/NavBar';
import { News } from './pages/News';
import { Music } from './pages/Music';
import { DialogsContainer } from './pages/Dialogs/DialogsContainer';
import { UsersContainer } from './pages/Users/UsersContainer';
import { ProfileContainer } from './pages/Profile/ProfileContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { Login } from './pages/Login';

export const App: FC<IAppProps> = () => {
  return (
    <>
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
            <Route path="/login" exact render={() => <Login />} />
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
