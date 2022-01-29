import React, { FC } from 'react';

import { PostItemType } from '../../../../redux/reducers/types';
import avatar from '../../../../images/avatar.png';

import styles from '../style.module.scss';

export const PostItem: FC<PostItemType> = ({ message, likesCount, id }) => (
  <li className={styles['posts__item']}>
    <img className={styles['posts__avatar']} width={50} height={50} src={avatar} alt="avatar" />
    {message}
    <span className={styles['posts__likes']}>Likes: {likesCount}</span>
  </li>
);
