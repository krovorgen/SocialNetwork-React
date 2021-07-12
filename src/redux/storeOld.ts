import { v1 } from 'uuid';
import { StoreType } from './store.type';

import profileReducer from './reducers/profile-reducer';
import dialogsReducer from './reducers/dialogs-reducer';

let store: StoreType = {
    _state: {
        profilePage: {
            postItemData: [],
            newPostText: '',
        },
        dialogsPage: {
            messagesData: [],
            dialogsData: [
                { id: v1(), name: 'Roma' },
                { id: v1(), name: 'Maxime' },
                { id: v1(), name: 'Anya' },
            ],
            newMessageText: '',
        },
    },
    _callSubscriber() {
        console.log('Main render');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber();
    },
};

export default store;
