import { ADD_MESSAGE, UPDATE_NEW_MESSAGE_TEXT } from '../../constants';

export type AddMessageActionType = {
  type: typeof ADD_MESSAGE;
};

export type UpdateNewMessageTextActionType = {
  type: typeof UPDATE_NEW_MESSAGE_TEXT;
  payload: string;
};

export type DialogsActionType = AddMessageActionType | UpdateNewMessageTextActionType;
