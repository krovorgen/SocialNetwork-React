import React, { FC } from 'react';

import { PostsContainer, ProfileInfo } from '../index';
import { IProfileProps } from './types';

import styles from './style.module.scss';

export const Profile: FC<IProfileProps> = ({ profile }) => (
  <div className={styles['profile']}>
    <ProfileInfo profile={profile} />
    <PostsContainer />
  </div>
);
