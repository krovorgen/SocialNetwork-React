import { v1 } from 'uuid';
import { ProfileStateType } from './types';
import { ProfileActionType, ProfileReducerType } from '../actions/profile-action';

const initialState: ProfileStateType = {
  postItemData: [],
  profile: null,
  status: '',
};

export const profileReducer = (state = initialState, action: ProfileActionType): ProfileStateType => {
  switch (action.type) {
    case ProfileReducerType.ADD_POST:
      let newPost = {
        id: v1(),
        message: action.payload,
        likesCount: 1,
      };
      return {
        ...state,
        postItemData: [...state.postItemData, newPost],
      };
    case ProfileReducerType.SET_USER_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case ProfileReducerType.SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
