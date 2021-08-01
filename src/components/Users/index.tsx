import React from 'react';
import axios from 'axios';

import { Button } from '../index';
import silhouette from '../../images/siluet.svg';
import { UsersPropsType } from './types';

import styles from './style.module.scss';

class Users extends React.Component<UsersPropsType> {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users/', {
        params: {
          page: this.props.currentPage,
          count: this.props.pageSize,
        },
      })
      .then(({ data }) => {
        this.props.setUsers(data.items);
        console.log(data.totalCount);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users/', {
        params: {
          page: pageNumber,
          count: this.props.pageSize,
        },
      })
      .then(({ data }) => {
        this.props.setUsers(data.items);
      });
  };

  render() {
    let pagesCount: number = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
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
                onClick={() => this.onPageChanged(item)}
                active={this.props.currentPage === item}
              >
                {item}
              </Button>
            </li>
          ))}
        </ul>
        <ul className={styles['user']}>
          {this.props.users.map((user, id) => {
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
                    <Button onClick={() => this.props.onUnfollowUser(user.id)} size={'full'}>
                      Unfollow
                    </Button>
                  ) : (
                    <Button onClick={() => this.props.onFollowUser(user.id)} size={'full'}>
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
  }
}

export default Users;
