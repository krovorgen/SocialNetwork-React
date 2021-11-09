import { UserProfileType } from '../../../../redux/reducers/types';
import { RouteComponentProps } from 'react-router-dom';

export interface IProfileContainerConnectType {
  currentProfileWatching: (userID: string) => void;
  getUserStatus: (userID: string) => void;
  updateUserStatus: (status: string) => void;
  profile: UserProfileType | null;
}

export interface IWithRouterProfileContainerProps {
  userID: string;
}

export type IProfileContainerPropsType = RouteComponentProps<IWithRouterProfileContainerProps> &
  IProfileContainerConnectType;

export interface IProfileProps {
  profile: UserProfileType | null;
  updateUserStatus: (status: string) => void;
}

export interface IProfileInfoProps {
  profile: UserProfileType | null;
  updateUserStatus: (status: string) => void;
}
