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
import { MapDispatchPropsType, MapStatePropsType } from './types';
import Users from './index';

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
