import { v1 } from 'uuid';
import { ActionTypes } from '../store.type';
import { ADD_POST, UPDATE_NEW_POST_TEXT } from '../constants';
import { ProfileStateType } from './types';

const initialState: ProfileStateType = {
  postItemData: [],
  newPostText: '',
};

const profileReducer = (state = initialState, action: ActionTypes): ProfileStateType => {
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
    default:
      return state;
  }
};

export default profileReducer;
