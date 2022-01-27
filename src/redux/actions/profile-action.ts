import { UserProfileType } from '../reducers/types';

export enum ProfileReducerType {
  ADD_POST = 'ADD-POST',
  SET_USER_PROFILE = 'SET_USER_PROFILE',
  SET_STATUS = 'SET_STATUS',
}

export type ProfileActionType =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setUserStatus>;

export const addPostAC = (value: string) =>
  ({
    type: ProfileReducerType.ADD_POST,
    payload: value,
  } as const);

export const setUserProfile = (profile: UserProfileType) =>
  ({
    type: ProfileReducerType.SET_USER_PROFILE,
    payload: profile,
  } as const);

export const setUserStatus = (status: string) =>
  ({
    type: ProfileReducerType.SET_STATUS,
    payload: status,
  } as const);
