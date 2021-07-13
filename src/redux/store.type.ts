import { ProfileActionType } from './actions/types/profile.type';
import { DialogsActionType } from './actions/types/dialogs.type';
import rootReducer from './root-reducers';

export type ActionTypes = ProfileActionType | DialogsActionType;

export type RootStateType = ReturnType<typeof rootReducer>;
