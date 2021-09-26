import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import silhouette from '../../images/siluet.svg';
import { IUsersProps } from './types';
import { Button } from '../Button';

import styles from './style.module.scss';

const Users: FC<IUsersProps> = ({
  totalUsersCount,
  pageSize,
  currentPage,
  users,
  onPageChanged,
  followingStatus,
  followProgress,
  unfollowProgress,
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
              variant={'navigation'}
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
          const followHandler = () => {
            followProgress(user.id);
          };
          const unfollowHandler = () => {
            unfollowProgress(user.id);
          };
          return (
            <li key={id} className={styles['user__item']}>
              <div className={styles['user__avatar']}>
                <NavLink to={`/profile/${user.id}`}>
                  <img
                    className={styles['user__ava']}
                    width={150}
                    height={150}
                    src={user.photos.small || silhouette}
                    alt=""
                  />
                </NavLink>
                {user.followed ? (
                  <Button
                    onClick={unfollowHandler}
                    size={'full'}
                    disabled={followingStatus.some((id) => id === user.id)}
                  >
                    Unfollow
                  </Button>
                ) : (
                  <Button
                    onClick={followHandler}
                    size={'full'}
                    disabled={followingStatus.some((id) => id === user.id)}
                  >
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
