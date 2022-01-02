import { AuthStateType } from './types';
import { SET_USER_DATA } from '../constants';
import { AuthActionType } from '../actions/types/auth.type';

const initialState: AuthStateType = {
  id: null,
  email: null,
  login: null,
  isLoading: true,
  isAuth: false,
};

export const authReducer = (state = initialState, action: AuthActionType): AuthStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
