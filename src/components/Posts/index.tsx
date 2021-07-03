import React, { ChangeEvent, FC } from 'react';

import PostItem from './PostItem';
import { addPostAC, updateNewPostTextAC } from '../../redux/state';
import { ActionTypes, PostItemType } from '../../redux/state.type';

import styles from './style.module.scss';

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
