import { ADD_POST, SET_STATUS, SET_USER_PROFILE } from '../../constants';
import { UserProfileType } from '../../reducers/types';

export type AddPostActionType = {
  type: typeof ADD_POST;
  payload: string;
};

export type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE;
  payload: UserProfileType;
};

export type SetStatusActionType = {
  type: typeof SET_STATUS;
  payload: string;
};

export type ProfileActionType = AddPostActionType | SetUserProfileActionType | SetStatusActionType;
