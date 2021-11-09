import React, { FC } from 'react';

import { PostsPropsType } from './types';
import { PostItem } from './PostItem';
import { Button } from '../atoms/Button';

import styles from './style.module.scss';
import { Textarea } from '../atoms/Textarea';

export const Posts: FC<PostsPropsType> = ({ postItemData, newPostText, onChangeTextarea, addPost }) => (
  <div className={styles['posts']}>
    <div className={styles['posts__form']}>
      <Textarea placeholder="Enter your message" onChange={onChangeTextarea} value={newPostText} />
      <Button onClick={addPost}>POST</Button>
    </div>
    <ul className={styles['posts__items']}>
      {postItemData &&
        postItemData.map((item) => {
          return <PostItem key={item.id} id={item.id} message={item.message} likesCount={item.likesCount} />;
        })}
    </ul>
  </div>
);