import { ADD_MESSAGE } from '../../constants';

export type AddMessageActionType = {
  type: typeof ADD_MESSAGE;
  payload: string;
};

export type DialogsActionType = AddMessageActionType;
