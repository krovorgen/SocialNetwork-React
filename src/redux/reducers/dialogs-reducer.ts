import { v1 } from 'uuid';
import { ActionTypes } from '../store.type';
import { ADD_MESSAGE, UPDATE_NEW_MESSAGE_TEXT } from '../constants';
import { DialogsStateType } from './types';

const initialState: DialogsStateType = {
    messagesData: [],
    dialogsData: [],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action: ActionTypes): DialogsStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: v1(),
                message: state.newMessageText,
            };
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.payload;
            return state;
        default:
            return state;
    }
};

export default dialogsReducer;
