import { UsersDataType, UsersStateType } from '../../../redux/reducers/types';

export type UsersAPIPropsType = MapStatePropsType & MapDispatchPropsType;

export type MapStatePropsType = UsersStateType;

export type MapDispatchPropsType = {
  onFollowUser: (id: string) => void;
  onUnfollowUser: (id: string) => void;
  setUsers: (users: UsersDataType[]) => void;
  setCurrentPage: (currentPage: number) => void;
  setTotalUsersCount: (value: number) => void;
  toggleStatusLoading: (status: boolean) => void;
};

export interface IUsersProps {
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  users: UsersDataType[];
  onFollowUser: (id: string) => void;
  onUnfollowUser: (id: string) => void;
  onPageChanged: (pageNumber: number) => void;
}
