import React, { FC } from 'react';
import { Field, Form } from 'react-final-form';

import { PostsPropsType } from './types';
import { PostItem } from './PostItem';
import { Button } from '../../atoms/Button';
import { Textarea } from '../../atoms/Textarea';

import styles from './style.module.scss';

export const Posts: FC<PostsPropsType> = ({ postItemData, addPost }) => {
  return (
    <div className={styles['posts']}>
      <PostsForm addPost={addPost} />
      <ul className={styles['posts__items']}>
        {postItemData &&
          postItemData.map((item) => {
            return <PostItem key={item.id} id={item.id} message={item.message} likesCount={item.likesCount} />;
          })}
      </ul>
    </div>
  );
};

const PostsForm = ({ addPost }: { addPost: (value: string) => void }) => {
  const onSubmit = (formData: { postValue: string }) => {
    addPost(formData.postValue);
  };
  return (
    <div className={styles['posts__form']}>
      <Form onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="postValue"
              render={(props) => <Textarea placeholder="Enter your message" {...props.input} />}
            />
            <Button type="submit">POST</Button>
          </form>
        )}
      </Form>
    </div>
  );
};
