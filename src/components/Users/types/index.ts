import { UsersDataType } from '../../../redux/reducers/types';

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

export type MapStatePropsType = {
  users: UsersDataType[];
};

export type MapDispatchPropsType = {
  onFollowUser: (id: string) => void;
  onUnfollowUser: (id: string) => void;
  setUsers: (users: UsersDataType[]) => void;
};
