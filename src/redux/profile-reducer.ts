import {
    ActionTypes,
    AddPostActionType,
    ProfilePageType,
    UpdateNewPostTextActionType,
} from './store.type';
import { v1 } from 'uuid';

export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const ADD_POST = 'ADD-POST';

const profileReducer = (state: ProfilePageType, action: ActionTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: v1(),
                message: state.newPostText,
                likesCount: 1,
            };
            state.postItemData.push(newPost);
            state.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            break;
        default:
            return state;
    }

    return state;
};

export const addPostAC = (): AddPostActionType => ({ type: ADD_POST });
export const updateNewPostTextAC = (newPostText: string): UpdateNewPostTextActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: newPostText,
});

export default profileReducer;
