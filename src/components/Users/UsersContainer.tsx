import { connect } from 'react-redux';

import { RootStateType } from '../../redux/store.type';
import { UsersActionType } from '../../redux/actions/types/users.type';
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
} from '../../redux/actions/users-action';
import { UsersDataType } from '../../redux/reducers/types';
import { MapDispatchPropsType, MapStatePropsType, UsersAPIPropsType } from './types';
import React from 'react';
import axios from 'axios';
import Users from './index';

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
    return (
      <>
        {this.props.isLoading ? (
          <img style={{ margin: '0 auto' }} src={'./images/loader.svg'} alt={'loader'} />
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

const mapDispatchToProps = (dispatch: (action: UsersActionType) => void): MapDispatchPropsType => {
  return {
    onFollowUser: (id: string) => {
      dispatch(followAC(id));
    },
    onUnfollowUser: (id: string) => {
      dispatch(unfollowAC(id));
    },
    setUsers: (users: UsersDataType[]) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (currentPage: number) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setTotalUsersCount: (value: number) => {
      dispatch(setTotalUsersCountAC(value));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);

export default UsersContainer;
