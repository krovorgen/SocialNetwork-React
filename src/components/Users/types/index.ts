import { UsersDataType, UsersStateType } from '../../../redux/reducers/types';

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

export type MapStatePropsType = UsersStateType;

export type MapDispatchPropsType = {
  onFollowUser: (id: string) => void;
  onUnfollowUser: (id: string) => void;
  setUsers: (users: UsersDataType[]) => void;
  setCurrentPage: (currentPage: number) => void;
  setTotalUsersCount: (value: number) => void;
};
