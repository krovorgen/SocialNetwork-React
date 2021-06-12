import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../style.module.scss';

interface IDialogsProps {
    id: number;
    name: string;
}

const DialogItem: FC<IDialogsProps> = ({ id, name }) => {
    return (
        <li className={styles['dialogs__item']}>
            <NavLink
                className={styles['dialogs__link']}
                activeClassName={styles['dialogs__link--active']}
                to={`/dialogs/${id}`}
            >
                {name}
            </NavLink>
        </li>
    );
};

export default DialogItem;
