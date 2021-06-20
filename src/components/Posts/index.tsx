import React, { createRef, FC } from 'react';

import PostItem from './PostItem';
import { PostItemType } from '../../redux/state';

import styles from './style.module.scss';

interface IPostsProps {
    postItemData: PostItemType[];
    addPostCallback: (postMessage: string) => void;
}

const Posts: FC<IPostsProps> = ({ postItemData, addPostCallback }) => {
    let newPostElement = createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostElement.current) {
            addPostCallback(newPostElement.current.value);
            newPostElement.current.value = '';
        }
    };

    return (
        <div className={styles['posts']}>
            <div className={styles['posts__form']}>
                <textarea
                    className={styles['posts__textarea']}
                    ref={newPostElement}
                    placeholder="Enter your message"
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
