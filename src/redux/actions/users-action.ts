import {
  FOLLOW,
  SET_CURRENT_PAGE,
  SET_TOTAL_USER_COUNT,
  SET_USERS,
  TOGGLE_LOADING_STATUS,
  UNFOLLOW,
} from '../constants';
import {
  FollowActionType,
  SetCurrentPageActionType,
  SetTotalUsersCountActionType,
  SetUsersActionType,
  ToggleStatusLoadingActionType,
  UnfollowActionType,
} from './types/users.type';
import { UsersDataType } from '../reducers/types';

export const onFollowUser = (id: string): FollowActionType => ({
  type: FOLLOW,
  payload: id,
});

export const onUnfollowUser = (id: string): UnfollowActionType => ({
  type: UNFOLLOW,
  payload: id,
});

export const setUsers = (users: UsersDataType[]): SetUsersActionType => ({
  type: SET_USERS,
  payload: users,
});

export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
  type: SET_CURRENT_PAGE,
  payload: currentPage,
});

export const setTotalUsersCount = (value: number): SetTotalUsersCountActionType => ({
  type: SET_TOTAL_USER_COUNT,
  payload: value,
});

export const toggleStatusLoading = (status: boolean): ToggleStatusLoadingActionType => ({
  type: TOGGLE_LOADING_STATUS,
  payload: status,
});
