import { ADD_MESSAGE, ADD_POST, UPDATE_NEW_MESSAGE_TEXT, UPDATE_NEW_POST_TEXT } from './state';

export type PostItemType = {
    id: string;
    message: string;
    likesCount: number;
};

export type DialogsDataType = {
    id: string;
    name: string;
};

export type MessagesDataType = {
    id: string;
    message: string;
};

export type ProfilePageType = {
    postItemData: PostItemType[];
    newPostText: string;
};

export type DialogsPageType = {
    messagesData: MessagesDataType[];
    dialogsData: DialogsDataType[];
    newMessageText: string;
};

export type RooTStateType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
};

export type AddPostActionType = {
    type: typeof ADD_POST;
};

export type AddMessageActionType = {
    type: typeof ADD_MESSAGE;
};

export type UpdateNewPostTextActionType = {
    type: typeof UPDATE_NEW_POST_TEXT;
    newPostText: string;
};

export type UpdateNewMessageTextActionType = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT;
    newMessageText: string;
};

export type ActionTypes =
    | AddPostActionType
    | UpdateNewPostTextActionType
    | AddMessageActionType
    | UpdateNewMessageTextActionType;

export type StoreType = {
    _state: RooTStateType;
    _callSubscriber: () => void;
    subscribe: (observer: () => void) => void;
    getState: () => RooTStateType;
    dispatch: (action: ActionTypes) => void;
};
