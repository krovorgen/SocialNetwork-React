import { PostItemType } from '../../../../redux/reducers/types';

export type MapStatePropsType = { postItemData: PostItemType[] };

export type MapDispatchPropsType = {
  addPost: (value: string) => void;
};

export type PostsPropsType = MapStatePropsType & MapDispatchPropsType;
