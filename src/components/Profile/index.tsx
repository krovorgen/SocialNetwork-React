import React from 'react';

import styles from './style.module.scss';
import Posts from '../Posts';

const Profile = () => {
    return (
        <>
            <div className={styles['main__bg-wrap']}>
                <img src="./images/user-bg.jpg" height={300} alt="background" />
            </div>
            <div className={styles['main__info']}>ava + descr</div>
            <Posts />
        </>
    );
};

export default Profile;
