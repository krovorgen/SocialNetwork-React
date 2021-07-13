import { UsersDataType } from '../../../redux/reducers/types';

export interface IUsersProps {
  users: UsersDataType[];
  onFollowUser: (id: string) => void;
  onUnfollowUser: (id: string) => void;
  setUsers: (users: UsersDataType[]) => void;
}
