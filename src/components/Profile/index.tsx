import React, { FC } from 'react';

import PostsContainer from '../Posts/PostsContainer';
import ProfileInfo from './ProfileInfo';
import { IProfileProps } from './types';

import styles from './style.module.scss';

const Profile: FC<IProfileProps> = ({ profilePage, dispatch }) => (
  <div className={styles['profile']}>
    <ProfileInfo />
    <PostsContainer
      postItemData={profilePage.postItemData}
      newPostText={profilePage.newPostText}
      dispatch={dispatch}
    />
  </div>
);

export default Profile;
