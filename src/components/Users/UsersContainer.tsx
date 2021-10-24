import React from 'react';
import { connect } from 'react-redux';

import { RootStateType } from '../../redux/store.type';
import { setCurrentPage } from '../../redux/actions/users-action';
import { MapStatePropsType, UsersAPIPropsType } from './types';
import { followProgress, getUsers, unfollowProgress } from '../../redux/thunk/users-thunk';
import { Preloader } from '../Preloader';
import { Users } from './Users';

class UsersAPI extends React.Component<UsersAPIPropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
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

export const UsersContainer = connect(mapStateToProps, {
  setCurrentPage,
  getUsers,
  followProgress,
  unfollowProgress,
})(UsersAPI);
