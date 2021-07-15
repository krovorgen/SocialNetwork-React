import { ChangeEvent } from 'react';
import { ProfileStateType } from '../../../redux/reducers/types';

export type MapStatePropsType = ProfileStateType;

export type MapDispatchPropsType = {
  addPost: () => void;
  onChangeTextarea: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export type PostsPropsType = MapStatePropsType & MapDispatchPropsType;
