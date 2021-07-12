import { ActionTypes } from '../../../redux/store.type';
import { ChangeEvent } from 'react';

export interface IPostsProps {
  addPost: () => void;
  onChangeTextarea: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface IPostsContainerProps {
  dispatch: (action: ActionTypes) => void;
}

export interface IPostItemProps {}
