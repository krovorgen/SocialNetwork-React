import { AuthDataType } from '../../../api/types';
import { GetUsersItemRT } from '../../../api';

export type PostItemType = {
  id: string;
  message: string;
  likesCount: number;
};

export type DialogsDataType = {
  id: string;
  name: string;
};

export type MessagesDataType = {
  id: string;
  message: string;
};

export type UserProfilePhotosType = {
  small: string;
  large: string;
};

export type UserProfileContactsType = {
  facebook: string;
  website: string;
  vk: string;
  twitter: string;
  instagram: string;
  youtube: string;
  github: string;
  mainLink: string;
};

export type UserProfileType = {
  aboutMe: string;
  contacts: UserProfileContactsType;
  lookingForAJob: string;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: UserProfilePhotosType;
};

export type ProfileStateType = {
  postItemData: PostItemType[];
  profile: UserProfileType | null;
  status: string;
};

export type DialogsStateType = {
  messagesData: MessagesDataType[];
  dialogsData: DialogsDataType[];
};

export type UsersStateType = {
  users: GetUsersItemRT[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isLoading: boolean;
  followingStatus: number[];
};

export interface AuthStateType extends AuthDataType {
  isLoading: boolean;
  isAuth: boolean;
}
