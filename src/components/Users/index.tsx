import React from 'react';
import axios from 'axios';

import { Button } from '../index';
import silhouette from '../../images/siluet.svg';
import { UsersPropsType } from './types';

import styles from './style.module.scss';

class Users extends React.Component<UsersPropsType> {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(({ data }) => {
      this.props.setUsers(data.items);
    });
  }

  render() {
    return (
      <>
        <ul>
          {this.props.users.map((user, id) => {
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
              </div>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Users;
