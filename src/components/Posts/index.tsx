import React, { ChangeEvent, FC } from 'react';

import PostItem from './PostItem';
import { ActionTypes } from '../../redux/store.type';

import styles from './style.module.scss';
import { addPostAC, updateNewPostTextAC } from '../../redux/actions/profile-action';
import { PostItemType } from '../../redux/reducers/types';

interface IPostsProps {
    postItemData: PostItemType[];
    newPostText: string;
    dispatch: (action: ActionTypes) => void;
}

const Posts: FC<IPostsProps> = ({ postItemData, newPostText, dispatch }) => {
    const addPost = () => dispatch(addPostAC());
    const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewPostTextAC(e.currentTarget.value));
    };

    return (
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
                            message={item.message}
                            likesCount={item.likesCount}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default Posts;
