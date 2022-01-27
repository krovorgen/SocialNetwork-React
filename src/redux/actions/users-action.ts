import { UsersDataType } from '../reducers/types';

export enum UsersReducerType {
  FOLLOW = 'FOLLOW',
  UNFOLLOW = 'UNFOLLOW',
  SET_USERS = 'SET_USERS',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
  SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT',
  TOGGLE_LOADING_STATUS = 'TOGGLE_LOADING_STATUS',
  TOGGLE_FOLLOWING_STATUS = 'TOGGLE_FOLLOWING_STATUS',
}

export type UsersActionType =
  | ReturnType<typeof onFollowUser>
  | ReturnType<typeof onUnfollowUser>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof toggleLoadingStatus>
  | ReturnType<typeof toggleFollowingStatus>;

export const onFollowUser = (id: string) =>
  ({
    type: UsersReducerType.FOLLOW,
    payload: id,
  } as const);

export const onUnfollowUser = (id: string) =>
  ({
    type: UsersReducerType.UNFOLLOW,
    payload: id,
  } as const);

export const setUsers = (users: UsersDataType[]) =>
  ({
    type: UsersReducerType.SET_USERS,
    payload: users,
  } as const);

export const setCurrentPage = (currentPage: number) =>
  ({
    type: UsersReducerType.SET_CURRENT_PAGE,
    payload: currentPage,
  } as const);

export const setTotalUsersCount = (value: number) =>
  ({
    type: UsersReducerType.SET_TOTAL_USER_COUNT,
    payload: value,
  } as const);

export const toggleLoadingStatus = (status: boolean) =>
  ({
    type: UsersReducerType.TOGGLE_LOADING_STATUS,
    payload: status,
  } as const);

export const toggleFollowingStatus = (status: boolean, userID: string) =>
  ({
    type: UsersReducerType.TOGGLE_FOLLOWING_STATUS,
    payload: { isLoading: status, userID: userID },
  } as const);
