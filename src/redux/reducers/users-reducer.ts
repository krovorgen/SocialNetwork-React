import { UsersStateType } from './types';
import { UsersActionType } from '../actions/types/users.type';
import { FOLLOW, SET_USERS, UNFOLLOW } from '../constants';

const initialState: UsersStateType = {
  users: [],
};

const usersReducer = (state = initialState, action: UsersActionType) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((item) =>
          item.id === action.payload ? { ...item, followed: true } : item
        ),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((item) =>
          item.id === action.payload ? { ...item, followed: false } : item
        ),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };
    default:
      return state;
  }
};

export default usersReducer;
