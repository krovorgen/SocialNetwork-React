import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { RootStateType } from '../../redux/store.type';
import { UsersActionType } from '../../redux/actions/types/users.type';
import {
  onFollowUser,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleStatusLoading,
  onUnfollowUser,
} from '../../redux/actions/users-action';
import { UsersDataType } from '../../redux/reducers/types';
import { MapDispatchPropsType, MapStatePropsType, UsersAPIPropsType } from './types';
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

const mapDispatchToProps = (dispatch: (action: UsersActionType) => void): MapDispatchPropsType => ({
  onFollowUser: (id: string) => {
    dispatch(onFollowUser(id));
  },
  onUnfollowUser: (id: string) => {
    dispatch(onUnfollowUser(id));
  },
  setUsers: (users: UsersDataType[]) => {
    dispatch(setUsers(users));
  },
  setCurrentPage: (currentPage: number) => {
    dispatch(setCurrentPage(currentPage));
  },
  setTotalUsersCount: (value: number) => {
    dispatch(setTotalUsersCount(value));
  },
  toggleStatusLoading: (status: boolean) => {
    dispatch(toggleStatusLoading(status));
  },
});

const UsersContainer = connect(mapStateToProps, {
  onFollowUser,
  onUnfollowUser,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleStatusLoading,
})(UsersAPI);

export default UsersContainer;
