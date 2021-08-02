import React, { FC } from 'react';
import styles from './style.module.scss';
import { Button } from '../index';
import silhouette from '../../images/siluet.svg';
import { IUsersProps } from './types';

const Users: FC<IUsersProps> = ({
  totalUsersCount,
  pageSize,
  currentPage,
  users,
  onUnfollowUser,
  onFollowUser,
  onPageChanged,
}) => {
  let pagesCount: number = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <>
      <ul className={styles['user-navigation']}>
        {pages.map((item, index) => (
          <li key={index} className={styles['user-navigation__item']}>
            <Button
              type={'navigation'}
              onClick={() => onPageChanged(item)}
              active={currentPage === item}
            >
              {item}
            </Button>
          </li>
        ))}
      </ul>
      <ul className={styles['user']}>
        {users.map((user, id) => {
          return (
            <li key={id} className={styles['user__item']}>
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
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Users;
