import React, { FC } from 'react';

import { MessageItem } from '../index';
import { DialogsPropsType } from './types';
import { Button } from '../Button';
import { DialogItem } from './DialogItem';

import styles from './style.module.scss';

const Dialogs: FC<DialogsPropsType> = ({ dialogsPage, addMessage, onChangeTextarea }) => (
  <div className={styles['dialogs']}>
    <ul className={styles['dialogs__items']}>
      {dialogsPage.dialogsData &&
        dialogsPage.dialogsData.map((item) => (
          <DialogItem key={item.id} name={item.name} id={item.id} />
        ))}
    </ul>
    <ul className={styles['messages']}>
      {dialogsPage.messagesData &&
        dialogsPage.messagesData.map((item) => (
          <MessageItem key={item.id} id={item.id} message={item.message} />
        ))}
      <textarea
        className={'form-textarea'}
        onChange={onChangeTextarea}
        placeholder="Enter your message"
        value={dialogsPage.newMessageText}
      />
      <Button onClick={addMessage}>Send</Button>
    </ul>
  </div>
);

export default Dialogs;
