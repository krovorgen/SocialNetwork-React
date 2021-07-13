import { ChangeEvent } from 'react';

import { addMessageAC, updateNewMessageTextAC } from '../../redux/actions/dialogs-action';
import Dialogs from './index';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/store.type';
import { DialogsActionType } from '../../redux/actions/types/dialogs.type';

let mapStateToProps = (state: RootStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch: (arg0: DialogsActionType) => void) => {
  return {
    addMessage: () => {
      dispatch(addMessageAC());
    },
    onChangeTextarea: (e: ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(updateNewMessageTextAC(e.currentTarget.value));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
