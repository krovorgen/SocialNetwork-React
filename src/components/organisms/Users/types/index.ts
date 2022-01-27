import { UsersStateType } from '../../../../redux/reducers/types';
import { GetUsersItemRT } from '../../../../api';

export type UsersAPIPropsType = MapStatePropsType & MapDispatchPropsType;

export type MapStatePropsType = UsersStateType;

export type MapDispatchPropsType = {
  followProgress: (userID: number) => void;
  unfollowProgress: (userID: number) => void;
  getUsers: (currentPage: number, pageSize: number) => void;
  setCurrentPage: (currentPage: number) => void;
};

export interface IUsersProps {
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  users: GetUsersItemRT[];
  onPageChanged: (pageNumber: number) => void;
  followingStatus: number[];
  followProgress: (userID: number) => void;
  unfollowProgress: (userID: number) => void;
}
