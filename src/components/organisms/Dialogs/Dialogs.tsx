import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { DialogsPropsType } from './types';
import { Textarea } from '../../atoms/Textarea';
import { Button } from '../../atoms/Button';

import styles from './style.module.scss';

export const Dialogs: FC<DialogsPropsType> = ({ dialogsPage, addMessage, onChangeTextarea }) => {
  return (
    <div className={styles['dialogs']}>
      <ul className={styles['dialogs__items']}>
        {dialogsPage.dialogsData
          ? dialogsPage.dialogsData.map((item) => (
              <li key={item.id} className={styles['dialogs__item']}>
                <NavLink
                  className={styles['dialogs__link']}
                  activeClassName={styles['dialogs__link--active']}
                  to={`/dialogs/${item.id}`}
                >
                  {item.name}
                </NavLink>
              </li>
            ))
          : null}
      </ul>
      <ul className={styles['messages']}>
        {dialogsPage.messagesData
          ? dialogsPage.messagesData.map((item) => (
              <li key={item.id} className={styles['messages__item']}>
                {item.message}
              </li>
            ))
          : null}
        <Textarea onChange={onChangeTextarea} placeholder="Enter your message" value={dialogsPage.newMessageText} />
        <Button onClick={addMessage}>Send</Button>
      </ul>
    </div>
  );
};
