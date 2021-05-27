import React from 'react';

import styles from './style.module.scss';
import PostItem from '../PostItem';

const Posts = () => {
    return (
        <div className={styles['posts']}>
            My Posts
            <ul className={styles['posts__items']}>
                <PostItem message={'hello world'} />
                <PostItem message={'hello world'} />
                <PostItem message={'hello world'} />
                <PostItem message={'hello world'} />
                <PostItem message={'hello world'} />
                <PostItem message={'hello world'} />
                <PostItem message={'hello world'} />
                <PostItem message={'hello world'} />
                <PostItem message={'hello world'} />
                <PostItem message={'hello world'} />
                <PostItem message={'hello world'} />
                <PostItem message={'hello world'} />
                <PostItem message={'hello world'} />
                <PostItem message={'hello world'} />
                <PostItem message={'hello world'} />
            </ul>
        </div>
    );
};

export default Posts;
