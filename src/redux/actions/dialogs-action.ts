import { ADD_MESSAGE } from '../constants';
import { AddMessageActionType } from './types/dialogs.type';

export const addMessageAC = (messageValue: string): AddMessageActionType => ({
  type: ADD_MESSAGE,
  payload: messageValue,
});
