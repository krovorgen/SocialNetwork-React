import React, { ChangeEvent, FC } from 'react';

import { addPostAC, updateNewPostTextAC } from '../../redux/actions/profile-action';
import { IPostsContainerProps } from './types';
import { ProfileStateType } from '../../redux/reducers/types';
import Posts from './index';

const PostsContainer: FC<IPostsContainerProps & ProfileStateType> = ({
  postItemData,
  newPostText,
  dispatch,
}) => {
  const addPost = () => dispatch(addPostAC());

  const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateNewPostTextAC(e.currentTarget.value));
  };

  return (
    <Posts
      onChangeTextarea={onChangeTextarea}
      postItemData={postItemData}
      addPost={addPost}
      newPostText={newPostText}
    />
  );
};

export default PostsContainer;
