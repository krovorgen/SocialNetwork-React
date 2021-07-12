import React, { FC } from 'react';

import PostItem from './PostItem';
import { IPostsProps } from './types';
import { ProfileStateType } from '../../redux/reducers/types';

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
      <button className={'form-btn'} onClick={addPost} type={'button'}>
        POST
      </button>
    </div>
    <ul className={styles['posts__items']}>
      {postItemData.map((item) => {
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
