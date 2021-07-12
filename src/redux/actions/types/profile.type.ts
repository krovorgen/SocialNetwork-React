import { ADD_POST, UPDATE_NEW_POST_TEXT } from '../../constants';

export type AddPostActionType = {
    type: typeof ADD_POST;
};

export type UpdateNewPostTextActionType = {
    type: typeof UPDATE_NEW_POST_TEXT;
    payload: string;
};

export type ProfileActionType = AddPostActionType | UpdateNewPostTextActionType;
