import { ChangeEvent } from 'react';

import { addMessageAC, updateNewMessageTextAC } from '../../redux/actions/dialogs-action';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/store.type';
import { DialogsActionType } from '../../redux/actions/types/dialogs.type';
import { MapDispatchPropsType, MapStatePropsType } from './types';
import { Dialogs } from './Dialogs';

let mapStateToProps = (state: RootStateType): MapStatePropsType => ({
  dialogsPage: state.dialogsPage,
});

let mapDispatchToProps = (dispatch: (arg0: DialogsActionType) => void): MapDispatchPropsType => ({
  addMessage: () => {
    dispatch(addMessageAC());
  },
  onChangeTextarea: (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateNewMessageTextAC(e.currentTarget.value));
  },
});

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
