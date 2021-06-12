import React, { FC } from 'react';

import styles from '../style.module.scss';

interface IPostItemProps {
    message: string;
    likesCount: number;
}

const PostItem: FC<IPostItemProps> = ({ message, likesCount }) => {
    return (
        <li className={styles['posts__item']}>
            <img
                className={styles['posts__avatar']}
                width={50}
                height={50}
                src="./images/avatar.png"
                alt="avatar"
            />
            {message}
            <span className={styles['posts__likes']}>Likes: {likesCount}</span>
        </li>
    );
};

export default PostItem;
