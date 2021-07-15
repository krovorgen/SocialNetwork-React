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
export type ProfileStateType = {
  postItemData: PostItemType[];
  newPostText: string;
};
export type DialogsStateType = {
  messagesData: MessagesDataType[];
  dialogsData: DialogsDataType[];
  newMessageText: string;
};
export type UsersStateType = {
  users: UsersDataType[];
};
