import { UsersStateType } from './types';
import { UsersActionType } from '../actions/types/users.type';
import { FOLLOW, SET_CURRENT_PAGE, SET_TOTAL_USER_COUNT, SET_USERS, UNFOLLOW } from '../constants';

const initialState: UsersStateType = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isLoading: true,
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
        users: [...action.payload],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_TOTAL_USER_COUNT:
      return {
        ...state,
        totalUsersCount: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
