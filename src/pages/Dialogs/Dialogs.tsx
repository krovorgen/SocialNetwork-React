import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Field, Form } from 'react-final-form';

import { DialogsPropsType } from './types';
import { composeValidators, required } from '../../helpers/validators';
import { Textarea } from '@alfalab/core-components/textarea';
import { Button } from '@alfalab/core-components/button';

import styles from './style.module.scss';

export const Dialogs: FC<DialogsPropsType> = ({ dialogsPage, addMessage }) => {
  return (
    <div className={styles.dialogs}>
      <ul className={styles.items}>
        {dialogsPage?.dialogsData.map((item) => (
          <li key={item.id} className={styles.item}>
            <NavLink to={`/dialogs/${item.id}`}>
              <Button size="xs" view="tertiary" block Component="span">
                {item.name}
              </Button>
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={styles.wrap}>
        <ul className={styles.messages}>
          {dialogsPage.messagesData.map((item) => (
            <li key={item.id}>{item.message}</li>
          ))}
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
          <Field name="messageValue" validate={composeValidators(required)}>
            {(props) => (
              <Textarea
                placeholder="Enter your message"
                block
                error={props.meta && props.meta.touched && props.meta.error}
                {...props.input}
              />
            )}
          </Field>
          <Button size="xs" view="tertiary" type="submit">
            Send
          </Button>
        </form>
      )}
    </Form>
  );
};
