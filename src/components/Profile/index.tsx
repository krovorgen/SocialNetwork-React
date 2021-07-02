import React, { FC } from 'react';

import Posts from '../Posts';
import ProfileInfo from './ProfileInfo';
import { ActionTypes, ProfilePageType } from '../../redux/state';

import styles from './style.module.scss';

interface IProfileProps {
    profilePage: ProfilePageType;
    dispatch: (action: ActionTypes) => void;
}

const Profile: FC<IProfileProps> = ({ profilePage, dispatch }) => {
    return (
        <div className={styles['profile']}>
            <ProfileInfo />
            <Posts
                postItemData={profilePage.postItemData}
                newPostText={profilePage.newPostText}
                dispatch={dispatch}
            />
        </div>
    );
};

export default Profile;
