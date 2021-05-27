import React from 'react';
import Posts from '../Posts';

import styles from './style.module.scss';

const Profile = () => {
    return (
        <div className={styles['profile']}>
            <div className={styles['profile__bg-wrap']}>
                <img src="./images/user-bg.jpg" alt="background" />
            </div>
            <div className={styles['profile__info']}>ava + descr</div>
            <Posts />
        </div>
    );
};

export default Profile;
