import { ChangeEvent } from 'react';
import { PostItemType, ProfileStateType } from '../../../../redux/reducers/types';

export type MapStatePropsType = { postItemData: PostItemType[]; newPostText: string };

export type MapDispatchPropsType = {
  addPost: () => void;
  onChangeTextarea: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export type PostsPropsType = MapStatePropsType & MapDispatchPropsType;
