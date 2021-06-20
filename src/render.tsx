import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { addPostCallback, RooTStateType } from './redux/state';
import App from './App';

import './scss/index.scss';

export let rerenderEntireTree = (state: RooTStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPostCallback={addPostCallback} />
        </BrowserRouter>,
        document.getElementById('root')
    );
};
