import React, { FC } from 'react';

import styles from '../style.module.scss';

interface IMessageItemProps {
    message: string;
}

const MessageItem: FC<IMessageItemProps> = ({ message }) => {
    return <li className={styles['messages__item']}>{message}</li>;
};

export default MessageItem;
