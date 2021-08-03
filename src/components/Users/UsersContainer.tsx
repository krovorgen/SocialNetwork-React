import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { RootStateType } from '../../redux/store.type';
import {
  onFollowUser,
  onUnfollowUser,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleStatusLoading,
} from '../../redux/actions/users-action';
import { MapStatePropsType, UsersAPIPropsType } from './types';
import Users from './index';
import Preloader from '../Preloader';

class UsersAPI extends React.Component<UsersAPIPropsType> {
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
        this.props.setTotalUsersCount(data.totalCount);
        this.props.toggleStatusLoading(false);
      });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.toggleStatusLoading(true);
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
        this.props.toggleStatusLoading(false);
      });
  };

  render() {
    return (
      <>
        {this.props.isLoading ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            onUnfollowUser={this.props.onUnfollowUser}
            onFollowUser={this.props.onFollowUser}
            onPageChanged={this.onPageChanged}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
  };
};

const UsersContainer = connect(mapStateToProps, {
  onFollowUser,
  onUnfollowUser,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleStatusLoading,
})(UsersAPI);

export default UsersContainer;
