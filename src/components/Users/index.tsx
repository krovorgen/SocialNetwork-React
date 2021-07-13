import React, { FC } from 'react';
import { v1 } from 'uuid';

import { IUsersProps } from './types';
import { Button } from '../index';

import styles from './style.module.scss';

const Users: FC<IUsersProps> = ({ users, onFollowUser, onUnfollowUser, setUsers }) => {
  users.length === 0 &&
    setUsers([
      {
        id: v1(),
        followed: true,
        fullName: 'Maksim Biarozka',
        status: "I'm ADMIN",
        location: { city: 'Minsk', country: 'Belarus' },
        avatar:
          'https://pixabay.com/get/g219b7c54d5ed96f35907fd567d056b561f97b9e8c8b0ff8a6fb8d2f47bbf57be51611ebd2ea0d8361a65524056fb8cbd_1280.png',
      },
      {
        id: v1(),
        followed: false,
        fullName: 'Roman Vinichenko',
        status: "I'm top HTML-coder",
        location: { city: 'Zaporogie', country: 'Ukraine' },
        avatar:
          'https://avatars.mds.yandex.net/get-zen-logos/200214/pub_5cfa04c885b5e500afe2d3c4_5cfbc9852d133400afd9e8f7/xxh',
      },
    ]);

  return (
    <ul>
      {users.map((user) => {
        return (
          <div className={styles['user']}>
            <div className={styles['user__avatar']}>
              <img
                className={styles['user__ava']}
                width={150}
                height={150}
                src={user.avatar}
                alt=""
              />
              {user.followed ? (
                <Button onClick={() => onUnfollowUser(user.id)} size={'full'}>
                  Unfollow
                </Button>
              ) : (
                <Button onClick={() => onFollowUser(user.id)} size={'full'}>
                  Follow
                </Button>
              )}
            </div>
            <div className={styles['user__info']}>
              <p className={styles['user__name']}>{user.fullName}</p>
              <p className={styles['user__status']}>{user.status}</p>
              <p className={styles['user__city']}>{user.location.city}</p>
              <p className={styles['user__country']}>{user.location.country}</p>
            </div>
          </div>
        );
      })}
    </ul>
  );
};

export default Users;
