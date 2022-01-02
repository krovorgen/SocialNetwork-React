import { SET_USER_DATA } from '../../constants';
import { AuthDataType } from '../../../api/types';

export type SetUserDataActionType = {
  type: typeof SET_USER_DATA;
  payload: AuthDataType;
};

export type AuthActionType = SetUserDataActionType;
