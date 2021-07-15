import React, { FC } from 'react';
import axios from 'axios';

import { IUsersProps } from './types';
import { Button } from '../index';
import silhouette from '../../images/siluet.svg';

import styles from './style.module.scss';

const Users: FC<IUsersProps> = ({ users, onFollowUser, onUnfollowUser, setUsers }) => {
  let getUsers = () => {
    users.length === 0 &&
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users', {
          params: {
            headers: '603398cb-a275-407d-9f4b-3b95565f3d9a',
          },
        })
        .then(({ data }) => {
          setUsers(data.items);
        });
  };
  return (
    <>
      <Button onClick={getUsers}>Get Users</Button>
      <ul>
        {users.map((user, id) => {
          return (
            <div key={id} className={styles['user']}>
              <div className={styles['user__avatar']}>
                <img
                  className={styles['user__ava']}
                  width={150}
                  height={150}
                  src={user.photos.small || silhouette}
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
                <p className={styles['user__name']}>{user.name}</p>
                <p className={styles['user__status']}>{user.status || 'Empty status'}</p>
              </div>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Users;
