import { UsersStateType } from './types';
import { UsersActionType, UsersReducerType } from '../actions/users-action';

const initialState: UsersStateType = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isLoading: true,
  followingStatus: [],
};

export const usersReducer = (state = initialState, action: UsersActionType) => {
  switch (action.type) {
    case UsersReducerType.FOLLOW:
      return {
        ...state,
        users: state.users.map((item) => (item.id === action.payload ? { ...item, followed: true } : item)),
      };
    case UsersReducerType.UNFOLLOW:
      return {
        ...state,
        users: state.users.map((item) => (item.id === action.payload ? { ...item, followed: false } : item)),
      };
    case UsersReducerType.SET_USERS:
      return {
        ...state,
        users: [...action.payload],
      };
    case UsersReducerType.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case UsersReducerType.SET_TOTAL_USER_COUNT:
      return {
        ...state,
        totalUsersCount: action.payload,
      };
    case UsersReducerType.TOGGLE_LOADING_STATUS:
      return {
        ...state,
        isLoading: action.payload,
      };
    case UsersReducerType.TOGGLE_FOLLOWING_STATUS:
      return {
        ...state,
        followingStatus: action.payload.isLoading
          ? [...state.followingStatus, action.payload.userID]
          : state.followingStatus.filter((id) => id !== action.payload.userID),
      };
    default:
      return state;
  }
};
