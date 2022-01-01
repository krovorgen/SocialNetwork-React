import { DialogsStateType } from '../../../../redux/reducers/types';
import { ChangeEvent } from 'react';

export type MapStatePropsType = {
  dialogsPage: DialogsStateType;
};

export type MapDispatchPropsType = {
  addMessage: (messageValue: string) => void;
};

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType;
