import { DialogsStateType } from '../../../redux/reducers/types';
import { ActionTypes } from '../../../redux/store.type';

export interface IDialogsProps {
  dialogsPage: DialogsStateType;
  dispatch: (action: ActionTypes) => void;
}
