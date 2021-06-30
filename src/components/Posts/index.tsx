import React, { ChangeEvent, createRef, FC } from 'react';

import PostItem from './PostItem';
import { PostItemType } from '../../redux/state';

import styles from './style.module.scss';

interface IPostsProps {
    postItemData: PostItemType[];
    addPostCallback: () => void;
    newPostText: string;
    updateNewPostText: (value: string) => void;
}

const Posts: FC<IPostsProps> = ({
    postItemData,
    addPostCallback,
    newPostText,
    updateNewPostText,
}) => {
    let newPostElement = createRef<HTMLTextAreaElement>();

    const addPost = () => {
        newPostElement.current && addPostCallback();
    };

    const onChangeHandler = () => {
        newPostElement.current && updateNewPostText(newPostElement.current.value);
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
