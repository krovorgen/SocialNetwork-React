import React, { FC } from 'react';

import Posts from '../Posts';
import ProfileInfo from './ProfileInfo';
import { ProfilePageType } from '../../redux/state';

import styles from './style.module.scss';

interface IProfileProps {
    profilePage: ProfilePageType;
}

const Profile: FC<IProfileProps> = ({ profilePage }) => {
    return (
        <div className={styles['profile']}>
            <ProfileInfo />
            <Posts postItemData={profilePage.postItemData} />
        </div>
    );
};

export default Profile;
