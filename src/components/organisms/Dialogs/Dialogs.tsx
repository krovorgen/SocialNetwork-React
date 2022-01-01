import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { DialogsPropsType } from './types';
import { Textarea } from '../../atoms/Textarea';
import { Button } from '../../atoms/Button';

import styles from './style.module.scss';
import { Field, Form } from 'react-final-form';

export const Dialogs: FC<DialogsPropsType> = ({ dialogsPage, addMessage }) => {
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
      <div className={styles.wrap}>
        <ul className={styles['messages']}>
          {dialogsPage.messagesData
            ? dialogsPage.messagesData.map((item) => (
                <li key={item.id} className={styles['messages__item']}>
                  {item.message}
                </li>
              ))
            : null}
        </ul>
        <DialogsForm addMessage={addMessage} />
      </div>
    </div>
  );
};

const DialogsForm = ({ addMessage }: { addMessage: (messageValue: string) => void }) => {
  const onSubmit = (formData: { messageValue: string }) => {
    addMessage(formData.messageValue);
  };
  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="messageValue"
            render={(props) => <Textarea placeholder="Enter your message" {...props.input} />}
          />
          <Button type="submit">Send</Button>
        </form>
      )}
    </Form>
  );
};
