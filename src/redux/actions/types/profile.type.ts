import { ADD_POST, SET_STATUS, SET_USER_PROFILE, UPDATE_NEW_POST_TEXT } from '../../constants';
import { UserProfileType } from '../../reducers/types';

export type AddPostActionType = {
  type: typeof ADD_POST;
};

export type UpdateNewPostTextActionType = {
  type: typeof UPDATE_NEW_POST_TEXT;
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

export type ProfileActionType =
  | AddPostActionType
  | UpdateNewPostTextActionType
  | SetUserProfileActionType
  | SetStatusActionType;
