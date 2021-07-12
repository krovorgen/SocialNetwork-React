import React, { FC } from 'react';

import { MessagesDataType } from '../../../redux/reducers/types';

import styles from '../style.module.scss';

const MessageItem: FC<MessagesDataType> = ({ id, message }) => (
  <li className={styles['messages__item']}>{message}</li>
);

export default MessageItem;
