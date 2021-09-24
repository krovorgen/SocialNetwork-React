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

export type UsersDataType = {
  id: string;
  followed: boolean;
  name: string;
  status: string;
  photos: { small: string; large: string };
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
  userId: string;
  photos: UserProfilePhotosType;
};

export type ProfileStateType = {
  postItemData: PostItemType[];
  newPostText: string;
  profile: UserProfileType | null;
};

export type DialogsStateType = {
  messagesData: MessagesDataType[];
  dialogsData: DialogsDataType[];
  newMessageText: string;
};

export type UsersStateType = {
  users: UsersDataType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isLoading: boolean;
};

export type AuthDataType = {
  id: number | null;
  email: string | null;
  login: string | null;
};

export interface AuthStateType extends AuthDataType {
  isLoading: boolean;
  isAuth: boolean;
}
