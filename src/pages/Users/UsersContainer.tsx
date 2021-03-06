import React, { ComponentType } from 'react';
import { connect } from 'react-redux';

import { RootStateType } from '../../redux/store.type';
import { setCurrentPage } from '../../redux/actions/users-action';
import { MapStatePropsType, UsersAPIPropsType } from './types';
import { followProgress, getUsers, unfollowProgress } from '../../redux/thunk/users-thunk';
import { Users } from './Users';
import { compose } from 'redux';
import { WithAuthRedirect } from '../../HOC/WithAuthRedirect';
import { Loader } from '@alfalab/core-components/loader';

class UsersAPI extends React.Component<UsersAPIPropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return <>{this.props.isLoading ? <Loader /> : <Users {...this.props} onPageChanged={this.onPageChanged} />}</>;
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

export const UsersContainer = compose<ComponentType>(
  WithAuthRedirect,
  connect(mapStateToProps, {
    setCurrentPage,
    getUsers,
    followProgress,
    unfollowProgress,
  })
)(UsersAPI);
