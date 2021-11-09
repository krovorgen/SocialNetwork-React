import { v1 } from 'uuid';
import { ADD_MESSAGE, UPDATE_NEW_MESSAGE_TEXT } from '../constants';
import { DialogsStateType } from './types';
import { DialogsActionType } from '../actions/types/dialogs.type';

const initialState: DialogsStateType = {
  messagesData: [],
  dialogsData: [
    { id: v1(), name: 'TEST USER' },
    { id: v1(), name: 'TEST USER' },
    { id: v1(), name: 'TEST USER' },
  ],
  newMessageText: '',
};

export const dialogsReducer = (state = initialState, action: DialogsActionType): DialogsStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: v1(),
        message: state.newMessageText,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
        newMessageText: '',
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.payload,
      };
    default:
      return state;
  }
};
