import { FOLLOW, SET_USERS, UNFOLLOW } from '../../constants';
import { UsersDataType } from '../../reducers/types';

export type FollowActionType = {
  type: typeof FOLLOW;
  payload: string;
};

export type UnfollowActionType = {
  type: typeof UNFOLLOW;
  payload: string;
};

export type SetUsersActionType = {
  type: typeof SET_USERS;
  payload: UsersDataType[];
};

export type UsersActionType = FollowActionType | UnfollowActionType | SetUsersActionType;
