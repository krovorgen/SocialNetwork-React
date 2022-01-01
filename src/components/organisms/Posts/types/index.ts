import { ChangeEvent } from 'react';
import { PostItemType, ProfileStateType } from '../../../../redux/reducers/types';

export type MapStatePropsType = { postItemData: PostItemType[] };

export type MapDispatchPropsType = {
  addPost: (value: string) => void;
};

export type PostsPropsType = MapStatePropsType & MapDispatchPropsType;
