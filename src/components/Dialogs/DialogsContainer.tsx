import React, { ChangeEvent, FC } from 'react';

import { addMessageAC, updateNewMessageTextAC } from '../../redux/actions/dialogs-action';
import { IDialogsContainerProps } from './types';
import Dialogs from './index';

const DialogsContainer: FC<IDialogsContainerProps> = ({ dialogsPage, dispatch }) => {
  const addMessage = () => {
    dispatch(addMessageAC());
  };

  const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateNewMessageTextAC(e.currentTarget.value));
  };

  return (
    <Dialogs
      dialogsPage={dialogsPage}
      addMessage={addMessage}
      onChangeTextarea={onChangeTextarea}
    />
  );
};

export default DialogsContainer;
