import React from 'react';
import { connect } from 'react-redux';

import { RootStateType } from '../../redux/store.type';
import {
  onFollowUser,
  onUnfollowUser,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleFollowingStatus,
  toggleStatusLoading,
} from '../../redux/actions/users-action';
import { MapStatePropsType, UsersAPIPropsType } from './types';
import Users from './index';
import { Preloader } from '../index';
import { api } from '../../api';

class UsersAPI extends React.Component<UsersAPIPropsType> {
  componentDidMount() {
    api.getUsers(this.props.currentPage, this.props.pageSize).then(({ data }) => {
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
      this.props.toggleStatusLoading(false);
    });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.toggleStatusLoading(true);
    this.props.setCurrentPage(pageNumber);
    api.getUsers(pageNumber, this.props.pageSize).then(({ data }) => {
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
          <Users {...this.props} onPageChanged={this.onPageChanged} />
        )}
      </>
    );
  }
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isLoading: state.usersPage.isLoading,
  followingStatus: state.usersPage.followingStatus,
});

const UsersContainer = connect(mapStateToProps, {
  onFollowUser,
  onUnfollowUser,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleStatusLoading,
  toggleFollowingStatus,
})(UsersAPI);

export default UsersContainer;
