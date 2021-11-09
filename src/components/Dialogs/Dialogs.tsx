import React, { FC } from 'react';

import { DialogsPropsType } from './types';
import { Button } from '../atoms/Button';
import { DialogItem } from './DialogItem';
import { MessageItem } from './MessageItem';

import styles from './style.module.scss';
import { Textarea } from '../atoms/Textarea';

export const Dialogs: FC<DialogsPropsType> = ({ dialogsPage, addMessage, onChangeTextarea }) => {
  return (
    <div className={styles['dialogs']}>
      <ul className={styles['dialogs__items']}>
        {dialogsPage.dialogsData &&
          dialogsPage.dialogsData.map((item) => <DialogItem key={item.id} name={item.name} id={item.id} />)}
      </ul>
      <ul className={styles['messages']}>
        {dialogsPage.messagesData &&
          dialogsPage.messagesData.map((item) => <MessageItem key={item.id} id={item.id} message={item.message} />)}
        <Textarea onChange={onChangeTextarea} placeholder="Enter your message" value={dialogsPage.newMessageText} />
        <Button onClick={addMessage}>Send</Button>
      </ul>
    </div>
  );
};