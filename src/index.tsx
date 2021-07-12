import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import store from './redux/store';
import { RootStateType } from './redux/store.type';

import './scss/index.scss';

let rerenderEntireTree = (state: RootStateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch} />
    </BrowserRouter>,
    document.getElementById('root')
  );
};
rerenderEntireTree(store.getState());

store.subscribe(() => {
  rerenderEntireTree(store.getState());
});
