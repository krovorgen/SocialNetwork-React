import { ADD_POST, SET_STATUS, SET_USER_PROFILE } from '../constants';
import { AddPostActionType, SetStatusActionType, SetUserProfileActionType } from './types/profile.type';
import { UserProfileType } from '../reducers/types';

export const addPostAC = (value: string): AddPostActionType => ({
  type: ADD_POST,
  payload: value,
});

export const setUserProfile = (profile: UserProfileType): SetUserProfileActionType => ({
  type: SET_USER_PROFILE,
  payload: profile,
});

export const setUserStatus = (status: string): SetStatusActionType => ({
  type: SET_STATUS,
  payload: status,
});
