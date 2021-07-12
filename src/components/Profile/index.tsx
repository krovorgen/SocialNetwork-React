import React, { FC } from 'react';

import Posts from '../Posts';
import ProfileInfo from './ProfileInfo';
import { ActionTypes } from '../../redux/store.type';

import styles from './style.module.scss';
import { ProfileStateType } from '../../redux/reducers/types';

interface IProfileProps {
    profilePage: ProfileStateType;
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
