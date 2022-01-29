import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import silhouette from '../../images/siluet.svg';
import { IUsersProps } from './types';
import { Pagination } from '@alfalab/core-components/pagination';
import { Button } from '@alfalab/core-components/button';

import styles from './style.module.scss';

export const Users: FC<IUsersProps> = ({
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
  const handlePageChange = (pageIndex: number) => {
    onPageChanged(pageIndex + 1);
  };
  return (
    <>
      <Pagination
        currentPageIndex={currentPage - 1}
        view="per-page"
        pagesCount={pagesCount}
        onPageChange={handlePageChange}
      />
      <ul className={styles.user}>
        {users.map((user, id) => {
          const followHandler = () => {
            followProgress(user.id);
          };
          const unfollowHandler = () => {
            unfollowProgress(user.id);
          };
          return (
            <li key={id} className={styles.item}>
              <div className={styles.avatar}>
                <NavLink to={`/profile/${user.id}`}>
                  <img
                    className={styles.ava}
                    width={150}
                    height={150}
                    src={user.photos.small || silhouette}
                    alt="Avatar"
                  />
                </NavLink>
                {user.followed ? (
                  <Button
                    onClick={unfollowHandler}
                    size="xs"
                    block
                    disabled={followingStatus.some((id) => id === user.id)}
                  >
                    Unfollow
                  </Button>
                ) : (
                  <Button
                    onClick={followHandler}
                    size="xs"
                    block
                    disabled={followingStatus.some((id) => id === user.id)}
                  >
                    Follow
                  </Button>
                )}
              </div>
              <div className={styles.info}>
                <p className={styles.name}>{user.name}</p>
                <p className={styles.status}>{user.status || 'Empty status'}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
