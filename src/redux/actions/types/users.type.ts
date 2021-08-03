import {
  FOLLOW,
  SET_CURRENT_PAGE,
  SET_TOTAL_USER_COUNT,
  SET_USERS,
  TOGGLE_LOADING_STATUS,
  UNFOLLOW,
} from '../../constants';
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

export type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE;
  payload: number;
};

export type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USER_COUNT;
  payload: number;
};

export type ToggleStatusLoadingActionType = {
  type: typeof TOGGLE_LOADING_STATUS;
  payload: boolean;
};

export type UsersActionType =
  | FollowActionType
  | UnfollowActionType
  | SetUsersActionType
  | SetCurrentPageActionType
  | SetTotalUsersCountActionType
  | ToggleStatusLoadingActionType;
