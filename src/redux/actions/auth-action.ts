import { SET_USER_DATA } from '../constants';
import { SetUserDataActionType } from './types/auth.type';
import { AuthDataType } from '../reducers/types';

export const setUserData = (newAuthData: AuthDataType): SetUserDataActionType => ({
  type: SET_USER_DATA,
  payload: newAuthData,
});
