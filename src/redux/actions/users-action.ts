import { FOLLOW, SET_USERS, UNFOLLOW } from '../constants';
import { FollowActionType, SetUsersActionType, UnfollowActionType } from './types/users.type';
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
