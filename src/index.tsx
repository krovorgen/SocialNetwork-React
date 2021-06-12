import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state from './redux/state';

import './scss/index.scss';

ReactDOM.render(<App state={state} />, document.getElementById('root'));
// postItemData={state.postItemData}
// dialogsData={state.dialogsData}
// messagesData={state.messagesData}
