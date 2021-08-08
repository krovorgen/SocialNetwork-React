import { ADD_POST, SET_USER_PROFILE, UPDATE_NEW_POST_TEXT } from '../constants';
import {
  AddPostActionType,
  SetUserProfileActionType,
  UpdateNewPostTextActionType,
} from './types/profile.type';
import { UserProfileType } from '../reducers/types';

export const addPostAC = (): AddPostActionType => ({
  type: ADD_POST,
});

export const updateNewPostTextAC = (newPostText: string): UpdateNewPostTextActionType => ({
  type: UPDATE_NEW_POST_TEXT,
  payload: newPostText,
});

export const setUserProfile = (profile: UserProfileType): SetUserProfileActionType => ({
  type: SET_USER_PROFILE,
  payload: profile,
});
