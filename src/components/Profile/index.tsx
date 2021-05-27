import React from 'react';

import styles from './style.module.scss';

const Profile = () => {
    return (
        <>
            <div className="main__bg-wrap">
                <img src="./images/user-bg.jpg" height={300} alt="background" />
            </div>
            <div className="main__info">ava + descr</div>
            <div className="posts">My Posts</div>
        </>
    );
};

export default Profile;
