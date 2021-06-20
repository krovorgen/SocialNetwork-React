import React, { FC } from 'react';

import Posts from '../Posts';
import ProfileInfo from './ProfileInfo';
import { ProfilePageType } from '../../redux/state';

import styles from './style.module.scss';

interface IProfileProps {
    profilePage: ProfilePageType;
    addPostCallback: (postMessage: string) => void;
}

const Profile: FC<IProfileProps> = ({ profilePage, addPostCallback }) => {
    return (
        <div className={styles['profile']}>
            <ProfileInfo />
            <Posts postItemData={profilePage.postItemData} addPostCallback={addPostCallback} />
        </div>
    );
};

export default Profile;
