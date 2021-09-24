import { SET_USER_DATA } from '../../constants';

export type SetUserDataActionType = {
  type: typeof SET_USER_DATA;
  payload: { id: number | null; email: string | null; login: string | null };
};

export type AuthActionType = SetUserDataActionType;
