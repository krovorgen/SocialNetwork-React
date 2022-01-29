import { combineReducers } from 'redux';

import { authReducer } from './reducers/auth-reducer';
import { dialogsReducer } from './reducers/dialogs-reducer';
import { profileReducer } from './reducers/profile-reducer';
import { usersReducer } from './reducers/users-reducer';
import { appReducer } from './reducers/app-reducer';

export const rootReducer = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});
