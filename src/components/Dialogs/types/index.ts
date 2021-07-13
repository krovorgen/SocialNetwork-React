import { DialogsStateType } from '../../../redux/reducers/types';
import { ChangeEvent } from 'react';

export interface IDialogsProps {
  dialogsPage: DialogsStateType;
  addMessage: () => void;
  onChangeTextarea: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}
