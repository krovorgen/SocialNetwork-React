import { Dispatch } from 'redux';

import { api } from '../../api';
import {
  onFollowUser,
  onUnfollowUser,
  setTotalUsersCount,
  setUsers,
  toggleFollowingStatus,
  toggleLoadingStatus,
  UsersActionType,
} from '../actions/users-action';

export const getUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch<UsersActionType>) => {
  dispatch(toggleLoadingStatus(true));
  api.getUsers(currentPage, pageSize).then(({ data }) => {
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(toggleLoadingStatus(false));
  });
};

export const followProgress = (userID: number) => (dispatch: Dispatch<UsersActionType>) => {
  dispatch(toggleFollowingStatus(true, userID));
  api.subscribeUser(userID).then(({ data }) => {
    if (data.resultCode === 0) {
      dispatch(onFollowUser(userID));
    }
    dispatch(toggleFollowingStatus(false, userID));
  });
};

export const unfollowProgress = (userID: number) => (dispatch: Dispatch<UsersActionType>) => {
  dispatch(toggleFollowingStatus(true, userID));
  api.unsubscribeUser(userID).then(({ data }) => {
    if (data.resultCode === 0) {
      dispatch(onUnfollowUser(userID));
    }
    dispatch(toggleFollowingStatus(false, userID));
  });
};
