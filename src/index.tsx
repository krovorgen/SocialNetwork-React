import state, { addPostCallback, RooTStateType, subscribe, updateNewPostText } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './scss/index.scss';

let rerenderEntireTree = (state: RooTStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPostCallback={addPostCallback}
                updateNewPostText={updateNewPostText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
