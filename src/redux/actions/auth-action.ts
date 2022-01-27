import { AuthDataType } from '../../api/types';

export type AuthActionType = ReturnType<typeof setUserData>;

export enum AuthReducerType {
  SET_USER_DATA = 'SET_USER_DATA',
}

export const setUserData = (newAuthData: AuthDataType) =>
  ({
    type: AuthReducerType.SET_USER_DATA,
    payload: newAuthData,
  } as const);
