import { v1 } from 'uuid';
import { ADD_MESSAGE } from '../constants';
import { DialogsStateType } from './types';
import { DialogsActionType } from '../actions/types/dialogs.type';

const initialState: DialogsStateType = {
  messagesData: [],
  dialogsData: [
    { id: v1(), name: 'TEST USER' },
    { id: v1(), name: 'TEST USER' },
    { id: v1(), name: 'TEST USER' },
  ],
};

export const dialogsReducer = (state = initialState, action: DialogsActionType): DialogsStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: v1(),
        message: action.payload,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
      };
    default:
      return state;
  }
};
