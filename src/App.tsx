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

export default App;
