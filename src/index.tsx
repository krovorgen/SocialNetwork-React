import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import store from './redux/state';

import './scss/index.scss';

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>,
        document.getElementById('root')
    );
};

rerenderEntireTree();

store.subscribe(rerenderEntireTree);
