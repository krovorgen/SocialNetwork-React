import { DialogsStateType } from '../../../redux/reducers/types';
import { ActionTypes } from '../../../redux/store.type';
import { ChangeEvent } from 'react';

export interface IDialogsProps {
  dialogsPage: DialogsStateType;
  addMessage: () => void;
  onChangeTextarea: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface IDialogsContainerProps {
  dialogsPage: DialogsStateType;
  dispatch: (action: ActionTypes) => void;
}
