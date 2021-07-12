import { ADD_POST, UPDATE_NEW_POST_TEXT } from '../constants';
import { AddPostActionType, UpdateNewPostTextActionType } from './types/profile.type';

export const addPostAC = (): AddPostActionType => ({
    type: ADD_POST,
});
export const updateNewPostTextAC = (newPostText: string): UpdateNewPostTextActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    payload: newPostText,
});
