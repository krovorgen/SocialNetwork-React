import React, { FC } from 'react';

import Posts from '../Posts';
import ProfileInfo from './ProfileInfo';
import { ProfilePageType } from '../../redux/state';

import styles from './style.module.scss';

interface IProfileProps {
    profilePage: ProfilePageType;
    addPostCallback: () => void;
    updateNewPostText: (value: string) => void;
}

const Profile: FC<IProfileProps> = ({ profilePage, addPostCallback, updateNewPostText }) => {
    return (
        <div className={styles['profile']}>
            <ProfileInfo />
            <Posts
                postItemData={profilePage.postItemData}
                newPostText={profilePage.newPostText}
                addPostCallback={addPostCallback}
                updateNewPostText={updateNewPostText}
            />
        </div>
    );
};

export default Profile;
