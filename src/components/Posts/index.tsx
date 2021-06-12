import React, { FC } from 'react';

import PostItem from './PostItem';
import { PostItemType } from '../../redux/state';

import styles from './style.module.scss';

interface IPostsProps {
    postItemData: PostItemType[];
}

const Posts: FC<IPostsProps> = ({ postItemData }) => {
    return (
        <div className={styles['posts']}>
            <form className={styles['posts__form']}>
                <textarea className={styles['posts__textarea']} placeholder="Enter your message" />
                <button className={styles['posts__btn']} type={'submit'}>
                    POST
                </button>
            </form>
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
