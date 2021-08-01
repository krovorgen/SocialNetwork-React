import { FOLLOW, SET_CURRENT_PAGE, SET_TOTAL_USER_COUNT, SET_USERS, UNFOLLOW } from '../constants';
import {
  FollowActionType,
  SetCurrentPageActionType,
  SetTotalUsersCountActionType,
  SetUsersActionType,
  UnfollowActionType,
} from './types/users.type';
import { UsersDataType } from '../reducers/types';

export const followAC = (id: string): FollowActionType => ({
  type: FOLLOW,
  payload: id,
});

export const unfollowAC = (id: string): UnfollowActionType => ({
  type: UNFOLLOW,
  payload: id,
});

export const setUsersAC = (users: UsersDataType[]): SetUsersActionType => ({
  type: SET_USERS,
  payload: users,
});

export const setCurrentPageAC = (currentPage: number): SetCurrentPageActionType => ({
  type: SET_CURRENT_PAGE,
  payload: currentPage,
});

export const setTotalUsersCountAC = (value: number): SetTotalUsersCountActionType => ({
  type: SET_TOTAL_USER_COUNT,
  payload: value,
});
