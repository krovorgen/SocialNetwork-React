import React, { FC } from 'react';

import { IPostsProps } from './types';
import { ProfileStateType } from '../../redux/reducers/types';
import { Button, PostItem } from '../index';

import styles from './style.module.scss';

const Posts: FC<IPostsProps & ProfileStateType> = ({
  postItemData,
  newPostText,
  onChangeTextarea,
  addPost,
}) => (
  <div className={styles['posts']}>
    <div className={styles['posts__form']}>
      <textarea
        className={'form-textarea'}
        placeholder="Enter your message"
        onChange={onChangeTextarea}
        value={newPostText}
      />
      <Button onClick={addPost}>POST</Button>
    </div>
    <ul className={styles['posts__items']}>
      {postItemData &&
        postItemData.map((item) => {
          return (
            <PostItem
              key={item.id}
              id={item.id}
              message={item.message}
              likesCount={item.likesCount}
            />
          );
        })}
    </ul>
  </div>
);

export default Posts;
