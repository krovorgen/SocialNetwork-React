import React, { FC } from 'react';

import DialogItem from './DialogItem';
import MessageItem from './MessageItem';
import { DialogsPageType } from '../../redux/state';

import styles from './style.module.scss';

interface IDialogsProps {
    dialogsPage: DialogsPageType;
}

const Dialogs: FC<IDialogsProps> = ({ dialogsPage }) => {
    return (
        <div className={styles['dialogs']}>
            <ul className={styles['dialogs__items']}>
                {dialogsPage.dialogsData.map((item) => (
                    <DialogItem key={item.id} name={item.name} id={item.id} />
                ))}
            </ul>
            <ul className={styles['messages']}>
                {dialogsPage.messagesData.map((item) => (
                    <MessageItem key={item.id} message="Hallo Welt" />
                ))}
            </ul>
        </div>
    );
};

export default Dialogs;
