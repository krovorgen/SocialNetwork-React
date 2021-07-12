import { ProfileActionType, UpdateNewPostTextActionType } from './actions/types/profile.type';
import { AddMessageActionType, UpdateNewMessageTextActionType } from './actions/types/dialogs.type';
import { DialogsStateType, ProfileStateType } from './reducers/types';
import rootReducer from './root-reducers';

export type RooTStateType = {
    profilePage: ProfileStateType;
    dialogsPage: DialogsStateType;
};

export type StoreType = {
    _state: RooTStateType;
    _callSubscriber: () => void;
    subscribe: (observer: () => void) => void;
    getState: () => RooTStateType;
    dispatch: (action: ActionTypes) => void;
};

export type RootStateTypes = {
    dialogs: DialogsStateType;
    profile: ProfileStateType;
};

export type ActionTypes =
    | UpdateNewPostTextActionType
    | AddMessageActionType
    | UpdateNewMessageTextActionType
    | ProfileActionType;

export type RootStateType = ReturnType<typeof rootReducer>;
