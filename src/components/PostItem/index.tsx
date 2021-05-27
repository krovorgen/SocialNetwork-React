import React from 'react';

import styles from './style.module.scss';

const PostItem = () => {
    return (
        <li className={styles['post']}>
            <img
                className={styles['post__avatar']}
                width={50}
                height={50}
                src="https://staging.performance.gov/img/agr/Circle-icons-profle.svg.png"
                alt="avatar"
            />
            text
        </li>
    );
};

export default PostItem;
