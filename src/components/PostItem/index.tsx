import React, { FC } from 'react';

import styles from './style.module.scss';

interface IPostItemProps {
    message: string;
}

const PostItem: FC<IPostItemProps> = ({ message }) => {
    return (
        <li className={styles['post']}>
            <img
                className={styles['post__avatar']}
                width={50}
                height={50}
                src="./images/avatar.png"
                alt="avatar"
            />
            {message}
        </li>
    );
};

export default PostItem;
