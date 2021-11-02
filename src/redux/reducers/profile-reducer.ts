import { v1 } from 'uuid';
import { ADD_POST, SET_USER_PROFILE, UPDATE_NEW_POST_TEXT, SET_STATUS } from '../constants';
import { ProfileStateType } from './types';
import { ProfileActionType } from '../actions/types/profile.type';

const initialState: ProfileStateType = {
  postItemData: [],
  newPostText: '',
  profile: null,
  status: '',
};

export const profileReducer = (
  state = initialState,
  action: ProfileActionType
): ProfileStateType => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: v1(),
        message: state.newPostText,
        likesCount: 1,
      };
      return {
        ...state,
        postItemData: [...state.postItemData, newPost],
        newPostText: '',
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.payload,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
