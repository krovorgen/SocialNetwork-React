import React, { FC } from 'react';
import { UsersStateType } from '../../redux/reducers/types';

interface IUsersProps {
  usersPage: UsersStateType;
  onFollowUser: (id: string) => void;
  onUnfollowUser: (id: string) => void;
}

const Users: FC<IUsersProps> = ({ usersPage, onFollowUser, onUnfollowUser }) => {
  return <></>;
};

export default Users;
