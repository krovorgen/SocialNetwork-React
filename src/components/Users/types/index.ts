import { UsersDataType, UsersStateType } from '../../../redux/reducers/types';

export type UsersAPIPropsType = MapStatePropsType & MapDispatchPropsType;

export type MapStatePropsType = UsersStateType;

export type MapDispatchPropsType = {
  followProgress: (userID: string) => void;
  unfollowProgress: (userID: string) => void;
  getUsers: (currentPage: number, pageSize: number) => void;
  setCurrentPage: (currentPage: number) => void;
};

export interface IUsersProps {
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  users: UsersDataType[];
  onPageChanged: (pageNumber: number) => void;
  followingStatus: string[];
  followProgress: (userID: string) => void;
  unfollowProgress: (userID: string) => void;
}
