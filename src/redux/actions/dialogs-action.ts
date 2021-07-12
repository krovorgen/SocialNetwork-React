import { ADD_MESSAGE, UPDATE_NEW_MESSAGE_TEXT } from '../constants';
import { AddMessageActionType, UpdateNewMessageTextActionType } from './types/dialogs.type';

export const addMessageAC = (): AddMessageActionType => ({
    type: ADD_MESSAGE,
});

export const updateNewMessageTextAC = (newMessageText: string): UpdateNewMessageTextActionType => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    payload: newMessageText,
});
