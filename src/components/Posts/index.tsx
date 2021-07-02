import React, { createRef, FC } from 'react';

import PostItem from './PostItem';
import { ActionTypes, PostItemType } from '../../redux/state';

import styles from './style.module.scss';

interface IPostsProps {
    postItemData: PostItemType[];
    newPostText: string;
    dispatch: (action: ActionTypes) => void;
}

const Posts: FC<IPostsProps> = ({ postItemData, newPostText, dispatch }) => {
    let newPostElement = createRef<HTMLTextAreaElement>();

    const addPost = () => {
        newPostElement.current && dispatch({ type: 'ADD-POST' });
    };
    const onChangeHandler = () => {
        newPostElement.current &&
            dispatch({ type: 'UPDATE-NEW-POST_TEXT', newPostText: newPostElement.current.value });
    };

    return (
        <div className={styles['posts']}>
            <div className={styles['posts__form']}>
                <textarea
                    className={styles['posts__textarea']}
                    ref={newPostElement}
                    placeholder="Enter your message"
                    onChange={onChangeHandler}
                    value={newPostText}
                />
                <button className={styles['posts__btn']} onClick={addPost}>
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
