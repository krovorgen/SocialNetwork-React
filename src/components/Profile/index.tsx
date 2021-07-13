import React, { FC } from 'react';

import PostsContainer from '../Posts/PostsContainer';
import ProfileInfo from './ProfileInfo';
import { IProfileProps } from './types';

import styles from './style.module.scss';

const Profile: FC<IProfileProps> = () => (
  <div className={styles['profile']}>
    <ProfileInfo />
    <PostsContainer />
  </div>
);

export default Profile;
