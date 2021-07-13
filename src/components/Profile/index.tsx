import React, { FC } from 'react';

import { IProfileProps } from './types';
import { PostsContainer, ProfileInfo } from '../index';

import styles from './style.module.scss';

const Profile: FC<IProfileProps> = () => (
  <div className={styles['profile']}>
    <ProfileInfo />
    <PostsContainer />
  </div>
);

export default Profile;
