import React, { FC } from 'react';

import DialogItem from './DialogItem';
import MessageItem from './MessageItem';
import { IDialogsProps } from './types';

import styles from './style.module.scss';

const Dialogs: FC<IDialogsProps> = ({ dialogsPage, addMessage, onChangeTextarea }) => (
  <div className={styles['dialogs']}>
    <ul className={styles['dialogs__items']}>
      {dialogsPage.dialogsData.map((item) => (
        <DialogItem key={item.id} name={item.name} id={item.id} />
      ))}
    </ul>
    <ul className={styles['messages']}>
      {dialogsPage.messagesData.map((item) => (
        <MessageItem key={item.id} id={item.id} message={item.message} />
      ))}
      <textarea
        className={'form-textarea'}
        onChange={onChangeTextarea}
        placeholder="Enter your message"
        value={dialogsPage.newMessageText}
      />
      <button className={'form-btn'} onClick={addMessage} type={'button'}>
        Send
      </button>
    </ul>
  </div>
);

export default Dialogs;
