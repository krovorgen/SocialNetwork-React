import React from 'react';

import styles from '../style.module.scss';

const ProfileInfo = () => {
    return (
        <div className={styles['profile__info']}>
            <div className={styles['profile__bg-wrap']}>
                <img src="./images/user-bg.jpg" alt="background" />
            </div>
            <div className={styles['profile__info']}>ava + descr</div>
        </div>
    );
};

export default ProfileInfo;
