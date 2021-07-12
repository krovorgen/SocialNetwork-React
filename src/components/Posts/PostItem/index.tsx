import React, { FC } from 'react';

import { PostItemType } from '../../../redux/reducers/types';

import styles from '../style.module.scss';
import { IPostItemProps } from '../types';

const PostItem: FC<IPostItemProps & PostItemType> = ({ message, likesCount, id }) => (
  <li className={styles['posts__item']}>
    <img
      className={styles['posts__avatar']}
      width={50}
      height={50}
      src="./images/avatar.png"
      alt="avatar"
    />
    {message}
    <span className={styles['posts__likes']}>Likes: {likesCount}</span>
  </li>
);

export default PostItem;
