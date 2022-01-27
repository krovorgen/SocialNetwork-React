import { v1 } from 'uuid';
import { DialogsStateType } from './types';
import { DialogsActionType, DialogsReducerType } from '../actions/dialogs-action';

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
    case DialogsReducerType.ADD_MESSAGE:
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
