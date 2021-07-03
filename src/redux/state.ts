import { v1 } from 'uuid';
import {
    AddMessageActionType,
    AddPostActionType,
    StoreType,
    UpdateNewMessageTextActionType,
    UpdateNewPostTextActionType,
} from './state.type';

export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
export const ADD_MESSAGE = 'ADD-MESSAGE';

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
        switch (action.type) {
            case ADD_POST:
                let newPost = {
                    id: v1(),
                    message: this._state.profilePage.newPostText,
                    likesCount: 1,
                };
                this._state.profilePage.postItemData.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber();
                break;
            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newPostText;
                this._callSubscriber();
                break;
            case ADD_MESSAGE:
                let newMessage = {
                    id: v1(),
                    message: this._state.dialogsPage.newMessageText,
                };
                this._state.dialogsPage.messagesData.push(newMessage);
                this._state.dialogsPage.newMessageText = '';
                this._callSubscriber();
                break;
            case UPDATE_NEW_MESSAGE_TEXT:
                this._state.dialogsPage.newMessageText = action.newMessageText;
                this._callSubscriber();
                break;
        }
    },
};

export const addPostAC = (): AddPostActionType => ({ type: ADD_POST });

export const updateNewPostTextAC = (newPostText: string): UpdateNewPostTextActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: newPostText,
});

export const addMessageAC = (): AddMessageActionType => ({ type: ADD_MESSAGE });

export const updateNewMessageTextAC = (newMessageText: string): UpdateNewMessageTextActionType => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: newMessageText,
});

// // @ts-ignore
// window.state = state;

export default store;
