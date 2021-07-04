import {
    ActionTypes,
    AddMessageActionType,
    DialogsPageType,
    UpdateNewMessageTextActionType,
} from './store.type';
import { v1 } from 'uuid';

export const ADD_MESSAGE = 'ADD-MESSAGE';
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state: DialogsPageType, action: ActionTypes): DialogsPageType => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: v1(),
                message: state.newMessageText,
            };
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            break;
        default:
            return state;
    }

    return state;
};

export const addMessageAC = (): AddMessageActionType => ({ type: ADD_MESSAGE });

export const updateNewMessageTextAC = (newMessageText: string): UpdateNewMessageTextActionType => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: newMessageText,
});

export default dialogsReducer;
