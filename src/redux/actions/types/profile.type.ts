import { ADD_POST, SET_USER_PROFILE, UPDATE_NEW_POST_TEXT } from '../../constants';

export type AddPostActionType = {
  type: typeof ADD_POST;
};

export type UpdateNewPostTextActionType = {
  type: typeof UPDATE_NEW_POST_TEXT;
  payload: string;
};

export type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE;
  payload: any;
};

export type ProfileActionType =
  | AddPostActionType
  | UpdateNewPostTextActionType
  | SetUserProfileActionType;
