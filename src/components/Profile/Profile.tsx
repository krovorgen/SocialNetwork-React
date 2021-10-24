import React, { FC } from 'react';

import { IProfileProps } from './types';
import { PostsContainer } from '../Posts/PostsContainer';
import { ProfileInfo } from './ProfileInfo';

import styles from './style.module.scss';

export const Profile: FC<IProfileProps> = ({ profile }) => (
  <div className={styles['profile']}>
    <ProfileInfo profile={profile} />
    <PostsContainer />
  </div>
);
