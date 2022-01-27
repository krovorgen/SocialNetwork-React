import { AuthStateType } from './types';
import { AuthActionType, AuthReducerType } from '../actions/auth-action';

const initialState: AuthStateType = {
  id: null,
  email: null,
  login: null,
  isLoading: true,
  isAuth: false,
};

export const authReducer = (state = initialState, action: AuthActionType): AuthStateType => {
  switch (action.type) {
    case AuthReducerType.SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
